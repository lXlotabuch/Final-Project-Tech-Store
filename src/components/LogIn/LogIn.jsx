import {React, useEffect } from 'react'
import AuthForm from './AuthForm/AuthForm'
import {Container} from '../common/Container'
import 'antd/dist/antd.css';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import Heading from '../common/Heading/Heading';
import ToSignUp from './ToSignUp/ToSignUp';
import {LogInWrapper} from './LogInStyled';

const LogIn = () => {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <Container>
      <Heading>Customer Login</Heading>
      <LogInWrapper>
        <ContentWrapper
          title="Registered Customers"
          subTitle="If you have an account, sign in with your email address."
        >
          <AuthForm />
        </ContentWrapper>
        <ContentWrapper
          title="New Customers?"
          subTitle="Creating an account has many benefits:"
        >
          <ToSignUp />
        </ContentWrapper>
      </LogInWrapper>
    </Container>
  )
}

export default LogIn