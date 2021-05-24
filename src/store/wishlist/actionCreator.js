import {UPDATE_WISHLIST, START_LOADING, STOP_LOADING} from './actionType'

export const updateWishlistCreator = (payload) => ({
  type: UPDATE_WISHLIST,
  payload
})
export const startLoading = () => ({ type: START_LOADING })
export const stopLoading = () => ({ type: STOP_LOADING })