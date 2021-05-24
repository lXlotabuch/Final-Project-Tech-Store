import {
  ADD_PRODUCT,
  SET_PRODUCTS,
  UPDATE_PRODUCT,
  GET_NEW_PRODUCTS,
  START_LOADING,
  STOP_LOADING,
} from './actionType';

export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload
})

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload
})

export const updateProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  payload
})
export const getNewProductsCreator = (payload) => ({
  type: GET_NEW_PRODUCTS,
  payload
})
export const startLoading = () => ({type: START_LOADING})
export const stopLoading = () => ({type: STOP_LOADING})