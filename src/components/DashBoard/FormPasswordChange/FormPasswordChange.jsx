/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setHideModal } from '../../../store/dashBoardModal/middleware';
import { changePassword } from '../../../store/customer/middleware';
import { validPassword } from '../../../utils/constants'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const PasswordChange = connect(null, { setHideModal })(({ setHideModal }) => {
  const [form] = Form.useForm();

  const onFinish = ({middlePassword, ...rest}) => {
    changePassword(rest);
    form.resetFields();
  };
  
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="password"
        label="Old Password"
        rules={[
          {
            required: true,
            message: 'Please input your old password!',
          },
          {
            min: 8,
            max: 30,
            message: 'Password must be between 8 and 30 characters'
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="middlePassword"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password.',
          },
          {
            min: 8,
            max: 30,
            message: 'Password must be between 8 and 30 characters'
          },
          {
            pattern: validPassword,
            message: 'Allowed characters is a-z, 0-9.'
          }
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="newPassword"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password.',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('middlePassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered does not match.'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
    
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={setHideModal}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
})

PasswordChange.propTypes = {
  setHideModal: PropTypes.func
}
export default PasswordChange;
