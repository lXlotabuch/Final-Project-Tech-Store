import {
  SET_TO_CATALOG,
  SET_CATALOG_PRODUCTS_QUANTITY,
  CLEAN_CATALOG_PRODUCTS,
  SET_SEARCH_PRODUCTS,
  CLEAR_SEARCH_PRODUCTS,
  SET_MIN_MAX_PRICE,
  START_LOADING,
  STOP_LOADING
} from './actionType';

export const setProductsToCatalog = (payload) => ({
  type: SET_TO_CATALOG,
  payload
})

export const setCatalogProductsQuantity = (payload) => ({
  type: SET_CATALOG_PRODUCTS_QUANTITY,
  payload
})

export const cleanCatalogProducts = () => ({
  type: CLEAN_CATALOG_PRODUCTS
})

export const setSearchProducts = (payload) => ({
  type: SET_SEARCH_PRODUCTS,
  payload
})

export const clearSearchProducts = () => ({
  type: CLEAR_SEARCH_PRODUCTS
})

export const setMinMaxPrice = (payload) => ({
  type: SET_MIN_MAX_PRICE,
  payload
})

export const startLoading = () => ({
  type: START_LOADING
})

export const stopLoading = () => ({
  type: STOP_LOADING
})