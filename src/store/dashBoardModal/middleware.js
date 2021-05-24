import {showModal, hideModal} from './actionCreator';

export const setShowModal = (id) => (dispatch) => {
  dispatch(showModal(id))
}
export const setHideModal = () => (dispatch) => {
  dispatch(hideModal())
}