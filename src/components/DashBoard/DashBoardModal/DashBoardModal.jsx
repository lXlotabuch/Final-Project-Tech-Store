import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setHideModal } from '../../../store/dashBoardModal/middleware';
import PasswordChange from '../FormPasswordChange/FormPasswordChange';
import FormInfoChange from '../FormInfoChange/FormInfoChange';
import StyledAntModal from './DashBoardModalStyled';

const mapStateToProps = (state) => ({
  show: state.dashBoardModal.show,
  formId: state.dashBoardModal.formId,
})
const Modal = connect(mapStateToProps, { setHideModal })(({
  show, setHideModal, formId
}) => {
  const checkForIdtoRender = (id) => {
    switch (id) {
      case 'setInfo':
        return {
          title: 'Change your contact information',
          form: <FormInfoChange />
        }
        
      case 'setPassword':
        return {
          title: 'Change your password',
          form: <PasswordChange />
        }
      default:
        return ''
    }
  }

  const {title, form} = checkForIdtoRender(formId);
  
  return (
    <StyledAntModal
      title={title}
      cancelText="Close"
      okButtonProps={{style: {display: 'none'}}}
      visible={show}
      onCancel={setHideModal}
      destroyOnClose
    >
      {form}
    </StyledAntModal>
  );
})
Modal.propTypes = {
  show: PropTypes.bool,
  setHideModal: PropTypes.func,
  formId: PropTypes.string,
}

export default Modal;
