import { setShowAuthModal, setHideAuthModal } from './actionCreator'

export const showAuthModal = (modalTitle = 'Autorization') => (dispatch) => {
  dispatch(setShowAuthModal(modalTitle))
}
export const hideAuthModal = () => (dispath) => dispath(setHideAuthModal())