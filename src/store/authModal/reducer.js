import { SHOW_AUTH_MODAL, HIDE_AUTH_MODAL } from './actionType'

export const MODULE_NAME = 'authModal'
export const selectIsModalOpen = (state) => state[MODULE_NAME].isOpen
export const selectAuthModalTitle = (state) => state[MODULE_NAME].modalTitle

const initialState = {
  isOpen: false,
  modalTitle: ''
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_AUTH_MODAL:
      return {
        ...state,
        isOpen: true,
        modalTitle: payload
      }
    case HIDE_AUTH_MODAL:
      return {
        ...state,
        isOpen: false,
        modalTitle: ''
      }
    default:
      return {
        ...state
      }
  }
}