import React from 'react'
import SignUpForm from './Form/SignUpForm';
import LoginPageLink from './LoginPageLink/LoginPageLink';
import { StyledSignUpBox, StyledFormTitle, StyledFormText } from './StylesSignUpBox'

const SignUpBox = () => (
  <StyledSignUpBox>
    <StyledFormTitle>Create an account</StyledFormTitle>
    <StyledFormText>
      You can сreate an account with email
      adress.
    </StyledFormText>
    <SignUpForm />
    <LoginPageLink />
  </StyledSignUpBox>
)
export default SignUpBox