/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import { DOMAIN, getHeaders } from '../../utils/constants'
import { updateWishlistCreator, startLoading, stopLoading } from './actionCreator'

const BASE_ENDPOINT = `${DOMAIN}/wishlist`

const getParsedListFromLS = () => {
  const check = localStorage.getItem('wishlist')
  if (!check) localStorage.setItem('wishlist', JSON.stringify([]))

  const items = localStorage.getItem('wishlist')
  return JSON.parse(items)
}
const addProductToLS = (product) => {
  const prevItems = getParsedListFromLS()
  const updatedItems = [...prevItems, product]
  localStorage.setItem('wishlist', JSON.stringify(updatedItems))
  return updatedItems
}
const removeProductFromLS = (product) => {
  const prevItems = getParsedListFromLS()
  const updatedItems = prevItems.filter((item) => item._id !== product._id)
  localStorage.setItem('wishlist', JSON.stringify(updatedItems))
  return updatedItems
}

const getItemsFromDB = () => {
  const headers = getHeaders()
  return axios.get(BASE_ENDPOINT, { headers })
    .then((response) => response)
    .catch((err) => err.response)
}

export const setWishlist = () => async (dispatch, getState) => {
  dispatch(startLoading())
  const {auth: { isLogin }} = getState()
  const itemsToSet = []
  
  if (isLogin) {
    const response = await getItemsFromDB()
    const { data, status } = response
    if (data && status === 200) itemsToSet.push(...data.products)
    else {
      itemsToSet.push(...getParsedListFromLS())
    }
  } else {
    itemsToSet.push(...getParsedListFromLS())
  }

  dispatch(updateWishlistCreator(itemsToSet))
  dispatch(stopLoading())
}

export const addProductToWishlist = (product) => async (dispatch, getState) => {
  if (!product || !product._id) return

  const productID = product._id
  const {auth: { isLogin }} = getState()
  const updatedList = []

  if (isLogin) {
    const headers = getHeaders()
    await axios.put(`${BASE_ENDPOINT}/${productID}`, null, { headers })
      .then((response) => {
        const { data, status } = response
        if (data && status === 200) updatedList.push(...data.products)
      })
      .catch((err) => err.response)
  } else {
    const updatedItems = addProductToLS(product)
    updatedList.push(...updatedItems)
  }
 
  dispatch(updateWishlistCreator(updatedList))
}

export const removeProductFromWishlist = (product) => async (dispatch, getState) => {
  if (!product || !product._id) return

  const productID = product._id
  const {auth: { isLogin }} = getState()
  const updatedList = []
  
  if (isLogin) {
    const headers = getHeaders()
    await axios.delete(`${BASE_ENDPOINT}/${productID}`, { headers })
      .then((response) => {
        const { data, status } = response
        if (data && status === 200) updatedList.push(...data.products)
      })
      .catch((err) => err.response)
  } else {
    const updatedItems = removeProductFromLS(product)
    updatedList.push(...updatedItems)
  }

  dispatch(updateWishlistCreator(updatedList))
}

export const compareLSItemsAndDBItems = () => async (dispatch) => {
  const { data, status } = await getItemsFromDB()
  const itemsLS = getParsedListFromLS()
  const itemsDB = []
  if (data && status === 200) itemsDB.push(...data.products)
  const allItems = [...itemsLS, ...itemsDB]
  
  const uniqueList = []
  allItems.forEach((el) => {
    const check = Boolean(uniqueList.find((item) => item.itemNo === el.itemNo))
    if (!check) uniqueList.push(el)
  })
  
  dispatch(updateWishlistCreator(uniqueList))

  const updatedItems = {
    products: uniqueList
  }
  const headers = getHeaders()
  axios.put(BASE_ENDPOINT, updatedItems, { headers })
    .then((res) => res)
    .catch((err) => err.response)
}
