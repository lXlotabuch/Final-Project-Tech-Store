import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_CART,
  SET_CART_SUMMARY,
  GET_BRANCHES,
  GET_SHIPPING_COST,
  GET_ORDER,
  CLEAR_ORDER,
  START_LOADING,
  STOP_LOADING
} from './actionType';

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
})
export const addToCartCreator = (cart) => ({
  type: ADD_TO_CART,
  payload: cart,
})
export const decreaseQuantityCreator = (cart) => ({
  type: DECREASE_QUANTITY,
  payload: cart,
})
export const increaseQuantityCreator = (cart) => ({
  type: INCREASE_QUANTITY,
  payload: cart,
})
export const removeFromCartCreator = (cart) => ({
  type: REMOVE_FROM_CART,
  payload: cart,
})
export const clearCartCreator = () => ({
  type: CLEAR_CART,
})
export const setCartSummaryCreator = (sum) => ({
  type: SET_CART_SUMMARY,
  payload: sum
})
export const getBranchesCreator = (branches) => ({
  type: GET_BRANCHES,
  payload: branches,
})
export const getShippingCostCreator = (shippingCost) => ({
  type: GET_SHIPPING_COST,
  payload: shippingCost,
})
export const getOrderCreator = (order) => ({
  type: GET_ORDER,
  payload: order,
})
export const clearOrderCreator = () => ({
  type: CLEAR_ORDER,
})
export const startLoading = () => ({
  type: START_LOADING,
})
export const stopLoading = () => ({
  type: STOP_LOADING,
})