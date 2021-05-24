import React from 'react'
import { Container } from '../common/Container'
import FormContainer from './StylesCreateCustomer'
import SignUpBox from './SignUpBox/SignUpBox'
import Heading from '../common/Heading/Heading'

const CreateCustomerPage = () => {
  window.scrollTo(0, 0)
  return (
    <Container>
      <Heading>Customer Registration</Heading>
      <FormContainer>
        <SignUpBox />
      </FormContainer>
    </Container>
  )
}
export default CreateCustomerPage