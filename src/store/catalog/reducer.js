import {
  SET_TO_CATALOG,
  SET_CATALOG_PRODUCTS_QUANTITY,
  CLEAN_CATALOG_PRODUCTS,
  SET_SEARCH_PRODUCTS,
  CLEAR_SEARCH_PRODUCTS,
  SET_MIN_MAX_PRICE,
  STOP_LOADING,
  START_LOADING
} from './actionType';

export const MODULE_NAME = 'catalog'

export const selectMinMaxPrice = (state) => state[MODULE_NAME].minMaxPrice
export const selectIsLoading = (state) => state[MODULE_NAME].isLoading
export const selectCatalogProducts = (state) => state[MODULE_NAME].catalogProducts
export const selectProductsQuantity = (state) => state[MODULE_NAME].productsQuantity
export const selectSearchProducts = (state) => state[MODULE_NAME].searchProducts

const initialState = {
  searchProducts: [],
  catalogProducts: [],
  isLoading: false,
  productsQuantity: 0,
  minMaxPrice: [],
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case START_LOADING:
    case STOP_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case SET_TO_CATALOG:
      return {
        ...state,
        catalogProducts: payload
      }
    case CLEAN_CATALOG_PRODUCTS:
      return {
        ...state,
        catalogProducts: []
      }
    case SET_CATALOG_PRODUCTS_QUANTITY:
      return {
        ...state,
        productsQuantity: payload
      }
    case SET_MIN_MAX_PRICE:
      return {
        ...state,
        minMaxPrice: payload
      }
    case SET_SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: payload
      }
    case CLEAR_SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: []
      }
    default:
      return state
  }
}

export default reducer