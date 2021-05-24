import React from 'react';
import {
  Form, Input, Button
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateCustomer } from '../../../store/customer/middleware';
import { setHideModal } from '../../../store/dashBoardModal/middleware';
import { selectCustomerInfo } from '../../../store/customer/reducer'
import { validName, validTelephone } from '../../../utils/constants'

const mapStateToProps = (state) => ({
  info: selectCustomerInfo(state)
})

export const FormInfoChangeComponent = ({setHideModal, updateCustomer}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (Object.values(values).every((elem) => elem === undefined)) {
      setHideModal();
      form.resetFields();
      return
    }
    updateCustomer(values, 'Your contact information has been changed');
    setHideModal();
    form.resetFields()
  }
  return (
    <Form name="nest" form={form} onFinish={onFinish}>
      <Form.Item
        name="firstName"
        label="First name"
        rules={[
          {
            pattern: validName,
            message: 'Allowed characters is a-z, а-я.'
          },
          {
            min: 2,
            max: 25,
            message: 'First name must be beetwen 2 and 25 characters.'
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        style={{paddingBottom: '0px'}}
        name="lastName"
        label="Last name"
        rules={[
          {
            pattern: validName,
            message: 'Allowed characters is a-z, а-я.'
          },
          {
            min: 2,
            max: 25,
            message: 'Last Name must be beetwen 2 and 25 characters.'
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="telephone"
        label="New Phone"
        rules={[
          {
            pattern: validTelephone,
            message: 'Phone number must start with "+380", allowed characters is 0-9.'
          },
          {
            min: 13,
            max: 13,
            message: 'Phone number must contain 12 numbers.'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

const FormInfoChange = connect(
  mapStateToProps, {
    setHideModal,
    updateCustomer
  }
)(FormInfoChangeComponent)

FormInfoChangeComponent.propTypes = {
  setHideModal: PropTypes.func,
  updateCustomer: PropTypes.func,
}
FormInfoChangeComponent.defaultProps = {
  setHideModal: () => null,
  updateCustomer: () => null,
}
export default FormInfoChange;
