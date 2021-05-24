/* eslint-disable padded-blocks */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../store/index'
import CartGroup from './CartGroup'

describe('All tests for Cart Group', () => {
  const regularProps = {
    productID: '1234567789',
    avilableQuantity: 13,
    addToCart: () => 'do something'
  }
  const otherProps = {
    productID: '1234567789',
    avilableQuantity: 0,
    addToCart: () => 'do something'
  }

  test('Cart Group render test', () => {
    render(
      <Provider store={store}>
        <CartGroup {...regularProps} />
      </Provider>
    )
  })

  test('Check is div defined by correct text', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CartGroup {...regularProps} />
      </Provider>
    )
    expect(getByText(`Avilable quantity: ${regularProps.avilableQuantity} pc.`)).toBeDefined()
  })

  test('Check is div defined by correct text -- 2', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CartGroup {...otherProps} />
      </Provider>
    )
    expect(getByText('The item is out of stock.')).toBeDefined()
  })

  test('Check is button defined', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CartGroup {...regularProps} />
      </Provider>
    )
    expect(getByText('Add to cart')).toBeDefined()
  })

  test('Check is button enabled', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CartGroup {...regularProps} />
      </Provider>
    )
    expect(getByText('Add to cart')).toBeEnabled()
  })
})