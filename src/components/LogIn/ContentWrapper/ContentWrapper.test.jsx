import React from 'react'
import { render } from '@testing-library/react'
import ContentWrapper from './ContentWrapper'

test('ContentWrapper render test', () => {
  render(
    <ContentWrapper
      title="Registered Customers"
      subTitle="If you have an account, sign in with your email address."
    >
      <div>ContentWrapper</div>
    </ContentWrapper>
  )
})