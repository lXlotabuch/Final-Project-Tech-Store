import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setShowModal } from '../../../store/dashBoardModal/middleware';
import { BlockInfo, TextInfo } from '../StyledDashBoard';
import Modal from '../DashBoardModal/DashBoardModal';
import FieldName from './StylesPasswordInfoChange'

const PasswordInfoChange = connect(null, {setShowModal})(({ setShowModal, info }) => (
  <BlockInfo>
    <h4>Contact Information</h4>
    <div>
      <TextInfo>
        <p>
          <FieldName>First Name:</FieldName>
          {' '}
          {info.firstName}
        </p>
        <p>
          <FieldName>Last Name:</FieldName>
          {' '}
          {info.lastName}
        </p>
        <p>
          <FieldName>Phone:</FieldName>
          {' '}
          {info.telephone}
        </p>
      </TextInfo>
      <div>
        <button
          type="submit"
          id="setInfo"
          data-testid="setInfo"
          onClick={(e) => setShowModal(e.target.id)}
        >
          Edit
        </button>
        <button
          type="submit"
          id="setPassword"
          onClick={(e) => setShowModal(e.target.id)}
        >
          Change Password
        </button>
        <Modal title />
      </div>
    </div>
  </BlockInfo>
))

PasswordInfoChange.propTypes = {
  setShowModal: PropTypes.func,
  info: PropTypes.instanceOf(Object),
}
export default PasswordInfoChange;