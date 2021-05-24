import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_CART,
  SET_CART_SUMMARY,
  GET_BRANCHES,
  GET_SHIPPING_COST,
  GET_CUSTOMER,
  GET_ORDER,
  CLEAR_ORDER,
  START_LOADING,
  STOP_LOADING
} from './actionType';

export const MODULE_NAME = 'cart';
export const selectProducts = (state) => state[MODULE_NAME].products;
export const selectProductCartCount = (state) => state[MODULE_NAME].productCartCount;
export const selectCartSummary = (state) => state[MODULE_NAME].summary;
export const selectCustomer = (state) => state[MODULE_NAME].customer;
export const selectCities = (state) => state[MODULE_NAME].cities;
export const selectBranches = (state) => state[MODULE_NAME].branches;
export const selectShippingCost = (state) => state[MODULE_NAME].shippingCost;
export const selectOrder = (state) => state[MODULE_NAME].order;
export const selectIsLoading = (state) => state[MODULE_NAME].isLoading;

const initialState = {
  summary: 0,
  products: [],
  customer: {},
  branches: [],
  shippingCost: 0,
  order: {},
  productCartCount: 0,
  isLoading: false,
  cities: [
    {
      CityName: 'Kyiv',
      Ref: '8d5a980d-391c-11dd-90d9-001a92567626'
    },
    {
      CityName: 'Dnipro',
      Ref: 'db5c88f0-391c-11dd-90d9-001a92567626'
    },
    {
      CityName: 'Kharkiv',
      Ref: 'db5c88e0-391c-11dd-90d9-001a92567626'
    },
    {
      CityName: 'Lviv',
      Ref: 'db5c88f5-391c-11dd-90d9-001a92567626'
    },
    {
      CityName: 'Odessa',
      Ref: 'db5c88d0-391c-11dd-90d9-001a92567626'
    },
  ],
}

export const cartReducer = (state = initialState, {type, payload}) => {
  const summaryTotalItems = (payload) => payload.products.reduce(
    (sum, curr) => sum + curr.cartQuantity * curr.product.currentPrice,
    0
  )
  const totalCountInCartOneProduct = (payload) => payload.products.reduce(
    (sum, curr) => sum + curr.cartQuantity,
    0
  )
    
  switch (type) {
    case DECREASE_QUANTITY:
    case INCREASE_QUANTITY:
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: payload.products,
        summary: summaryTotalItems(payload),
        productCartCount: totalCountInCartOneProduct(payload),
      }
    case ADD_TO_CART:
    case SET_CART:
      return {
        ...state,
        products: payload.products,
        customer: payload.customerId || {},
        productCartCount: totalCountInCartOneProduct(payload),
        summary: summaryTotalItems(payload)
      }
    case SET_CART_SUMMARY:
      return {
        ...state,
        summary: payload,
      }
    case GET_BRANCHES:
      return {
        ...state,
        branches: payload,
        shippingCost: 0,
      }
    case GET_SHIPPING_COST:
      return {
        ...state,
        shippingCost: payload,
      }
    case GET_CUSTOMER:
      return {
        ...state,
        customer: payload.customerId,
      }
    case GET_ORDER:
      return {
        ...state,
        order: payload,
      }
    case CLEAR_CART:
      return {
        ...state,
        products: [],
        summary: 0,
        shippingCost: 0,
        productCartCount: 0,
      }
    case CLEAR_ORDER:
      return {
        ...state,
        order: {},
      }
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export default cartReducer