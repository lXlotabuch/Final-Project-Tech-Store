import {
  SET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  GET_NEW_PRODUCTS,
  START_LOADING,
  STOP_LOADING,
} from './actionType';
import shuffleArray from '../../utils/shuffleArray'

export const MODULE_NAME = 'products'
export const selectNewProducts = (state) => state[MODULE_NAME].newProducts
export const selectIsLoading = (state) => state[MODULE_NAME].isLoading

const initialState = {
  products: [],
  newProducts: [],
  pageProduct: {},
  isLoading: false
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload
      }

    case ADD_PRODUCT:
      return {
        ...state,
        products: [payload, ...state.products]
      }

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((el) => (+el.itemNo !== +payload.itemNo ? el : payload))
      }
      
    case GET_NEW_PRODUCTS:
      return {
        ...state,
        newProducts: shuffleArray(payload)
      }

    case START_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      }
      
    default:
      return state
  }
}

export default reducer