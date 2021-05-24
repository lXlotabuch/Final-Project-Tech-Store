/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  fireEvent, render, screen, waitFor
} from '@testing-library/react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import {createMemoryHistory} from 'history'
import { CartListComponent } from './CartList';
import { productsMock } from '../../../mocks/products';
import { machMedia } from '../../../mocks/matchMedia.mock';

jest.mock('../CartItem/CartItem', () => 'cart-item')

describe('CartListComponent', () => {
  beforeEach(() => {
    machMedia()
  })
  test('render', () => {
    const {asFragment} = render(
      <CartListComponent
        products={productsMock}
        clearCart={() => {}}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('handle go to homePage', () => {
    const onClickContinue = jest.fn()
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <CartListComponent
          products={productsMock}
          clearCart={() => {}}
          onClickContinue={onClickContinue}
        />
      </Router>
    )
    fireEvent.click(screen.getByRole('button', {name: /continue shopping/i}))
    expect(history.location.pathname).toBe('/')
  })

  test('handle clear cart', async () => {
    const clearCart = jest.fn()
    render(
      <CartListComponent
        products={productsMock}
        clearCart={clearCart}
      />
    )
    fireEvent.click(screen.getByRole('button', {name: /clear shopping cart/i}))
    await waitFor(() => expect(clearCart).toBeCalled())
  })
})