/* eslint-disable no-underscore-dangle */
import { message } from 'antd'
import axios from 'axios'
import {
  addCartToLS, decreaseQuantityLS, getCartLS, increaseQuantityLS, removeFromCartLS
} from '../../utils/cartLS'
import { DOMAIN, getHeaders } from '../../utils/constants'
import {getOrders} from '../customer/middleware'
import {
  setCart,
  decreaseQuantityCreator,
  addToCartCreator,
  removeFromCartCreator,
  clearCartCreator,
  increaseQuantityCreator,
  getShippingCostCreator,
  getOrderCreator,
  clearOrderCreator,
  startLoading,
  stopLoading,
  getBranchesCreator,
} from './actionCreator'

const BASE_ENDPOINT = `${DOMAIN}/cart`

export const addToCart = (product, quantity) => (dispatch, getStore) => {
  const { cart: { products }, auth: {isLogin} } = getStore()
  const productId = product._id
  const updatedCart = []
  let showMessage = true

  const itemInCartAndLS = products.find((el) => el.product._id === productId)
  if (itemInCartAndLS) {
    const checked = products.map((el) => {
      if (el.product._id === itemInCartAndLS.product._id) {
        if (el.cartQuantity + quantity > el.product.quantity) {
          message.warning('The quantity has been automatically adjusted to the stock quantity')
          showMessage = false
          return {
            ...el,
            cartQuantity: el.product.quantity
          }
        }
        return {
          ...el,
          cartQuantity: el.cartQuantity + quantity
        }
      }
      return el
    })
    updatedCart.push(...checked)
  } else {
    updatedCart.push(
      ...products,
      {
        product: productId,
        cartQuantity: quantity,
      }
    )
  }
  if (isLogin) {
    const headers = getHeaders()
    axios.put(BASE_ENDPOINT, {products: updatedCart}, { headers })
      .then((updatedCart) => {
        dispatch(addToCartCreator(updatedCart.data));
        if (showMessage) message.success('Product has been added to cart')
      })
      .catch((error) => error.response)
  } else {
    addCartToLS(product, quantity)
    dispatch(setCart({products: getCartLS()}))
    if (showMessage) message.success('Product has been added to cart')
  }
}

export const getCart = () => (dispatch, getStore) => {
  const {auth: {isLogin} } = getStore()
  if (isLogin) {
    const headers = getHeaders()
    axios.get(BASE_ENDPOINT, { headers })
      .then((cart) => {
        if (cart.data !== null) {
          dispatch(setCart(cart.data))
        }
      })
      .catch((err) => err.response)
  } else {
    dispatch(setCart({products: getCartLS()}))
  }
}

export const increaseQuantity = (product) => (dispatch, getStore) => {
  const {auth: {isLogin} } = getStore()
  if (isLogin) {
    const headers = getHeaders()
    axios.put(`${BASE_ENDPOINT}/${product._id}`, null, { headers })
      .then((updatedCart) => {
        dispatch(increaseQuantityCreator(updatedCart.data));
      })
      .catch((error) => error.response)
  } else {
    dispatch(increaseQuantityCreator({products: increaseQuantityLS(product._id)}))
  }
}

export const decreaseQuantity = (productID) => (dispatch, getStore) => {
  const {auth: {isLogin} } = getStore()
  if (isLogin) {
    const headers = getHeaders()
    axios.delete(`${BASE_ENDPOINT}/product/${productID}`, { headers })
      .then((updatedCart) => {
        dispatch(decreaseQuantityCreator(updatedCart.data))
      })
      .catch((error) => error.response)
  } else {
    dispatch(decreaseQuantityCreator({products: decreaseQuantityLS(productID)}))
  }
}

export const removeFromCart = (productID) => (dispatch, getStore) => {
  const {auth: {isLogin} } = getStore()
  if (isLogin) {
    const headers = getHeaders()
    axios.delete(`${BASE_ENDPOINT}/${productID}`, { headers })
      .then((result) => {
        dispatch(removeFromCartCreator(result.data))
      })
      .catch((error) => error.response)
  } else {
    dispatch(removeFromCartCreator({products: removeFromCartLS(productID)}))
  }
}

export const clearCart = () => (dispatch, getStore) => {
  const {auth: {isLogin} } = getStore()
  if (isLogin) {
    const headers = getHeaders()
    axios.delete(BASE_ENDPOINT, { headers })
      .then(() => {
        dispatch(clearCartCreator())
      })
      .catch((err) => err.response)
  } else {
    dispatch(clearCartCreator())
    localStorage.removeItem('cart')
  }
}

export const getBranches = (cityRef) => (dispatch) => {
  axios.post('https://api.novaposhta.ua/v2.0/json/', {
    modelName: 'AddressGeneral',
    calledMethod: 'getWarehouses',
    methodProperties: {
      Language: 'ru',
      CityRef: cityRef,
    },
    apiKey: '469ae707669208ac6f2d113fc7edbe13'
  })
    .then((data) => {
      const dataBranches = data.data.data.map((item) => ({
        branchName: item.DescriptionRu,
        branchRef: item.Ref
      }))
      dispatch(getBranchesCreator(dataBranches))
    })
    .catch((error) => error.response)
}

export const getShippingCost = (recipientCityRef) => (dispatch) => {
  axios.post('https://api.novaposhta.ua/v2.0/json/', {
    modelName: 'InternetDocument',
    calledMethod: 'getDocumentPrice',
    methodProperties: {
      CitySender: '8d5a980d-391c-11dd-90d9-001a92567626',
      CityRecipient: recipientCityRef.current.props.value,
      Weight: '10',
      ServiceType: 'DoorsDoors',
      Cost: '100',
      CargoType: 'Cargo',
      SeatsAmount: '10',
      PackCalculate: {
        PackCount: '1',
        PackRef: '1499fa4a-d26e-11e1-95e4-0026b97ed48a'
      },
      RedeliveryCalculate: {
        CargoType: 'Money',
        Amount: '100'
      }
    },
    apiKey: '469ae707669208ac6f2d113fc7edbe13'
  })
    .then((data) => {
      dispatch(getShippingCostCreator(data.data.data[0].Cost))
    })
    .catch((error) => error.response)
}

export const placeOrder = (
  products, values, customer, shippingCost, valuePaymentInfo
) => (dispatch, getStore) => {
  const {auth: {isLogin} } = getStore()
  dispatch(startLoading())
  dispatch(clearOrderCreator())
  const body = {
    canceled: false,
    deliveryAddress: JSON.stringify({
      country: values.country,
      city: values.recipientCity,
      branch: values.recipientBranch,
    }),
    shipping: JSON.stringify(shippingCost),
    paymentInfo: JSON.stringify(valuePaymentInfo),
    status: 'not shipped',
    email: values.email,
    mobile: values.phoneNumber,
    firstName: values.firstName,
    letterSubject: `${values.firstName}, thank you for order!`,
    letterHtml: '<h1>Your order is placed. Our manager will contact you soon.</h1>'
  }
  if (isLogin) {
    body.customerId = customer
  } else {
    body.products = JSON.stringify(products)
  }
  
  axios
    .post(`${DOMAIN}/orders`, body)
    .then((newOrder) => {
      dispatch(getOrderCreator(newOrder.data.order))
      dispatch(clearCart())
      dispatch(getOrders())
    })
    .catch((err) => err.response)
    .finally(() => {
      dispatch(stopLoading())
    })
}

export const getCartServer = async () => {
  const headers = getHeaders()
  const cartState = []
  await axios.get(BASE_ENDPOINT, { headers })
    .then((res) => {
      const {data, status} = res
      if (data && status === 200) cartState.push(...data.products)
    })
    .catch((err) => err.response)
  return cartState
}

export const addLSToServer = () => async (dispatch) => {
  const cartLS = JSON.parse(localStorage.getItem('cart')) || []
  let products = await getCartServer()
  if (cartLS.length > 0 && products.length === 0) {
    products = cartLS
  } else {
    cartLS.forEach((el) => {
      const itemInCartAndLS = products.find((item) => item.product._id === el.product._id)
      if (itemInCartAndLS) {
        itemInCartAndLS.cartQuantity += el.cartQuantity
      } else {
        products.push(
          el
        )
      }
    })
  }
  const updatedCartForServer = products.map((item) => ({
    product: item.product._id,
    cartQuantity: item.cartQuantity
  }))
  const headers = getHeaders()
  axios.put(BASE_ENDPOINT, {products: updatedCartForServer}, { headers })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        localStorage.removeItem('cart')
        dispatch(addToCartCreator(updatedCart.data));
      }
    })
    .catch((error) => error.response)
}