/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/index'
import Wishlist from './WishlistPage'

describe('Wishlist page render tests', () => {
  test('Wishlist page simple render test', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('Check is wishlist has a heading', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    )
    expect(getByText('My wishlist')).toBeDefined()
  })

  test('Check is page has mesage by default', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    )
    expect(getByText('No items have been added.')).toBeDefined()
  })
})