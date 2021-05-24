/* eslint-disable react/jsx-props-no-spreading */
import { React, useState} from 'react';
import {
  Form, Input, message
} from 'antd';
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import {authLogIn} from '../../../store/auth/middleware';
import { compareLSItemsAndDBItems } from '../../../store/wishlist/middleware'
import {addLSToServer, getCart} from '../../../store/cart/middleware'
import { validPassword } from '../../../utils/constants'
import { getCustomer, getOrders } from '../../../store/customer/middleware'
import {ButtonStyled} from './AuthFormStyled';

const AuthForm = connect(null, {
  authLogIn,
  compareLSItemsAndDBItems,
  addLSToServer,
  getCart,
  getCustomer,
  getOrders
})((
  {
    authLogIn,
    compareLSItemsAndDBItems,
    addLSToServer,
    getCart,
    finishCallback,
    getCustomer,
    getOrders
  }
) => {
  const formLayout = 'vertical'
  const [error, setError] = useState({})
  const history = useHistory()

  const onFinish = async (values) => {
    const {status, data} = await authLogIn(values)

    if (status === 200) {
      getCustomer()
      getOrders()
      addLSToServer()
      getCart()
      compareLSItemsAndDBItems()
      // eslint-disable-next-line no-unused-expressions
      typeof finishCallback === 'function' ? finishCallback() : history.push('/')
    }

    if (status === 400) {
      message.error(data.password)
      setError(data)
    }

    if (status === 404) {
      message.error(data.loginOrEmail)
      setError(data)
    }
  };

  const onChange = () => {
    setError({})
  }

  return (
    <Form
      name="authorization"
      layout={formLayout}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onChange={onChange}
    >
      <Form.Item
        label="Login or Email"
        name="loginOrEmail"
        {...error.loginOrEmail && {
          help: error.loginOrEmail,
          validateStatus: 'error',
        }}
        rules={[
          {
            required: true,
            message: 'Please input your login or email!',
          },
        ]}
      >
        <Input placeholder="Your Login or Email" size="large" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        {...error.password && {
          help: error.password,
          validateStatus: 'error',
        }}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            pattern: validPassword,
            message: 'Allowed characters is a-z, 0-9'
          },
          {
            min: 8,
            max: 30,
            message: 'Password must be between 8 and 30 characters'
          }
        ]}
      >
        <Input.Password placeholder="Your password" size="large" />
      </Form.Item>

      <Form.Item>
        <ButtonStyled type="primary" htmlType="submit" shape="round">
          Sign In
        </ButtonStyled>
      </Form.Item>
    </Form>
  );
});

export default AuthForm