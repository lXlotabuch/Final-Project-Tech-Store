import { UPDATE_WISHLIST, START_LOADING, STOP_LOADING } from './actionType'

export const MODULE_NAME = 'wishlist'
export const selectWishlistItems = (state) => state[MODULE_NAME].wishlistItems
export const selectIsLoading = (state) => state[MODULE_NAME].isLoading

export const initialState = {
  wishlistItems: [],
  isLoading: false
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_WISHLIST:
      return {
        ...state,
        wishlistItems: payload
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
      return {
        ...state
      }
  }
}