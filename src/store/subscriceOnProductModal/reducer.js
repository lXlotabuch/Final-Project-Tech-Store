import { SHOW_MODAL, HIDE_MODAL } from './actionType'

export const MODULE_NAME = 'subscribeModal'
export const selectIsOpenModal = (state) => state[MODULE_NAME].isOpen

const initialState = {
  isOpen: false,
}

export const reducer = (state = initialState, { type }) => {
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: true,
      }
    case HIDE_MODAL:
      return {
        ...state,
        isOpen: false,
      }
    default:
      return {
        ...state
      }
  }
}