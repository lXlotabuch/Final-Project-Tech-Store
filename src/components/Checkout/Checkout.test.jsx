/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { CheckoutComponent } from './Checkout';

jest.mock('./OrderSummary/OrderSummary', () => 'order-summary')
jest.mock('./FormCheckout/FormCheckout', () => 'form-checkout')

describe('CheckoutComponent', () => {
  test('render', () => {
    const {asFragment} = render(<CheckoutComponent
      isLogin
    />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('handle go to SignIn', () => {
    const onClickSignIn = jest.fn()
    const history = createMemoryHistory()

    render(
      <Router history={history}>
        <CheckoutComponent
          isLogin={false}
          onClickSignIn={onClickSignIn}
        />
      </Router>
    )
    fireEvent.click(screen.getByRole('button', {name: /sign in/i}))

    expect(history.location.pathname).toBe('/signin')
  })

  test('handle go to Cart', () => {
    const onClickCart = jest.fn()
    const history = createMemoryHistory()

    render(
      <Router history={history}>
        <CheckoutComponent
          isLogin
          onClickCart={onClickCart}
        />
      </Router>
    )
    fireEvent.click(screen.getByRole('button', {name: /back to cart/i}))

    expect(history.location.pathname).toBe('/cart')
  })
})
