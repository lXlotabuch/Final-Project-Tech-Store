/* eslint-disable no-unused-vars */
import React from 'react'
import { message, Modal } from 'antd'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectIsModalOpen, selectAuthModalTitle } from '../../store/authModal/reducer'
import { hideAuthModal } from '../../store/authModal/middleware'
import AuthForm from '../LogIn/AuthForm/AuthForm'

const mapStateToProps = (state) => ({
  isOpen: selectIsModalOpen(state),
  modalTitle: selectAuthModalTitle(state)
})

const AuthModal = connect(mapStateToProps, { hideAuthModal })(({
  isOpen, modalTitle, hideAuthModal
}) => {
  const history = useHistory()
  const handleOk = () => {
    hideAuthModal()
    history.push('/signup')
  }
  const finishCallback = () => {
    hideAuthModal()
    message.success('You have been autorizated')
  }

  return (
    <Modal
      title={modalTitle}
      visible={isOpen}
      onCancel={hideAuthModal}
      okText="Sign up"
      onOk={handleOk}
      okButtonProps={{ shape: 'round'}}
      cancelButtonProps={{ shape: 'round' }}
      destroyOnClose
    >
      <AuthForm finishCallback={finishCallback} />
    </Modal>
  )
})
export default AuthModal