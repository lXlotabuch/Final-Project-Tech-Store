import React from 'react'
import { Link } from 'react-router-dom'
import { LinkWrapper, StyledDiv } from '../StylesSignUpBox'
import StyledButton from '../../../common/Buttons/StyledButton'

const LoginPageLink = () => (
  <LinkWrapper>
    <StyledDiv>
      Already registered ?
    </StyledDiv>
    <Link to="/signin">
      <StyledButton size="xs" shape="round" color="borderBlue">Sign In</StyledButton>
    </Link>
  </LinkWrapper>
)
export default LoginPageLink