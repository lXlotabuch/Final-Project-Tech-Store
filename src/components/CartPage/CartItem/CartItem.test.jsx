/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import {
  fireEvent, render, screen, waitFor
} from '@testing-library/react'
import { machMedia } from '../../../mocks/matchMedia.mock';
import {CartItemComponent} from './CartItem'
import { productMock } from '../../../mocks/products';

describe('CartItemComponent', () => {
  beforeEach(() => {
    machMedia()
  })
  test('render', () => {
    const history = createMemoryHistory()
    const {asFragment} = render(
      <Router history={history}>
        <CartItemComponent
          product={productMock}
          cartQuantity={1}
          increaseQuantity={() => {}}
          decreaseQuantity={() => {}}
          removeFromCart={() => {}}
        />
      </Router>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('handle decrease quantity', async () => {
    const decreaseQuantity = jest.fn()
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <CartItemComponent
          product={productMock}
          cartQuantity={1}
          increaseQuantity={() => {}}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={() => {}}
        />
      </Router>
    )
    fireEvent.click(screen.getByRole('button', {name: /minus/i}))
    await waitFor(() => expect(decreaseQuantity).toBeCalled())
    expect(decreaseQuantity.mock.calls[0]).toEqual([productMock._id])
  })

  test('handle increase quantity', async () => {
    const increaseQuantity = jest.fn()
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <CartItemComponent
          product={productMock}
          cartQuantity={1}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={() => {}}
          removeFromCart={() => {}}
        />
      </Router>
    )
    fireEvent.click(screen.getByRole('button', {name: /plus/i}))
    await waitFor(() => expect(increaseQuantity).toBeCalled())
    expect(increaseQuantity.mock.calls[0]).toEqual([productMock])
  })
  
  test('handle remove', async () => {
    const removeFromCart = jest.fn()
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <CartItemComponent
          product={productMock}
          cartQuantity={1}
          increaseQuantity={() => {}}
          decreaseQuantity={() => {}}
          removeFromCart={removeFromCart}
        />
      </Router>
    )
    fireEvent.click(screen.getByRole('button', {name: /close/i}))
    await waitFor(() => expect(removeFromCart).toBeCalled())
    expect(removeFromCart.mock.calls[0]).toEqual([productMock._id])
  })
})