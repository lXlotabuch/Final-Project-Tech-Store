import React from 'react'
import {render} from '@testing-library/react'
import CartPage from './CartPage'

jest.mock('./Summary/Summary', () => 'summary')
jest.mock('./CartList/CartList', () => 'cart-list')

test('render CartPage component', () => {
  const {asFragment} = render(<CartPage />)

  expect(asFragment()).toMatchSnapshot()
})