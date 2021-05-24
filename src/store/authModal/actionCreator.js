import { SHOW_AUTH_MODAL, HIDE_AUTH_MODAL } from './actionType'

export const setShowAuthModal = (payload) => ({
  type: SHOW_AUTH_MODAL,
  payload
})
export const setHideAuthModal = () => ({
  type: HIDE_AUTH_MODAL
})