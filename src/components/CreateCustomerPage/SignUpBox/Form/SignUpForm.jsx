/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useHistory } from 'react-router-dom';
import { Input } from 'antd';
import StyledFrom from './StylesSignUpForm'
import { createCustomer } from '../../../../store/customer/middleware'
import StyledButton from '../../../common/Buttons/StyledButton'
import {
  validName,
  validLogin,
  validPassword,
  validTelephone
} from '../../../../utils/constants'
import {
  formLayout,
  passwordMatchValidator,
  getCredentials
} from './utils'

const SignUpForm = () => {
  const history = useHistory()
  const onSubmit = (values) => {
    createCustomer(getCredentials(values), history)
  };

  return (
    <StyledFrom
      {...formLayout}
      name="sign-up-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onSubmit}
    >

      <StyledFrom.Item
        label="First name"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your name.',
          },
          {
            pattern: validName,
            message: 'Allowed characters is a-z, а-я.'
          },
          {
            min: 2,
            max: 25,
            message: 'First Name must be beetwen 2 and 25 characters.'
          },
        ]}
      >
        <Input placeholder="Your name" />
      </StyledFrom.Item>

      <StyledFrom.Item
        label="Last name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your last name.',
          },
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
        <Input placeholder="Your last name" />
      </StyledFrom.Item>

      <StyledFrom.Item
        label="Login"
        name="login"
        rules={[
          {
            required: true,
            message: 'Please set your login.',
          },
          {
            min: 3,
            max: 10,
            message: 'Login must be between 3 and 10 characters.',
          },
          {
            pattern: validLogin,
            message: 'Allowed characters is a-z, 0-9.'
          },
        ]}
      >
        <Input placeholder="Your login" />
      </StyledFrom.Item>
      
      <StyledFrom.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email.',
          },
          {
            type: 'email',
            message: 'Entered data is not an email.',
          },
        ]}
      >
        <Input placeholder="mail@mail.com" />
      </StyledFrom.Item>

      <StyledFrom.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password.',
          },
          {
            min: 8,
            max: 30,
            message: 'Password must be between 8 and 30 characters.'
          },
          {
            pattern: validPassword,
            message: 'Allowed characters is a-z, 0-9.'
          },
        ]}
      >
        <Input.Password placeholder="Password" />
      </StyledFrom.Item>

      <StyledFrom.Item
        label="Confrim password"
        name="confrimPassword"
        rules={[
          {
            required: true,
            message: 'Please input your password.',
          },
          passwordMatchValidator,
        ]}
      >
        <Input.Password placeholder="Confrim password" />
      </StyledFrom.Item>

      <StyledFrom.Item
        label="Phone number"
        name="telephone"
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
        <Input placeholder="Phone number 380 XX XXX XXXXX" />
      </StyledFrom.Item>

      <StyledFrom.Item>
        <StyledButton size="lg" shape="round" htmlType="submit">Submit</StyledButton>
      </StyledFrom.Item>

    </StyledFrom>
  )
}

export default SignUpForm