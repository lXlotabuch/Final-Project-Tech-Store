import {
  CLEAR_CUSTOMER,
  SET_CUSTOMER_INFO, SET_ORDERS, START_LOADING, STOP_LOADING
} from './actionType';

export const setCustomerInfo = (payload) => ({
  type: SET_CUSTOMER_INFO,
  payload
})

export const setOrders = (payload) => ({
  type: SET_ORDERS,
  payload
})

export const startLoading = () => ({
  type: START_LOADING
})

export const stopLoading = () => ({
  type: STOP_LOADING
})
export const clearCustomer = () => ({
  type: CLEAR_CUSTOMER
})