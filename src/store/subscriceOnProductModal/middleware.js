import { setShowModal, setHideModal } from './actionCreator'

export const showSubscribeModal = () => (dispatch) => dispatch(setShowModal())
export const hideSubscribeModal = () => (dispatch) => dispatch(setHideModal())
