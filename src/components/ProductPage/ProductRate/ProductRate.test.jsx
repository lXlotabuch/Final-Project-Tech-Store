/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import ProductRate from './ProductRate'
import { store } from '../../../store/index'
import { getUpdatedProductTeamplate } from './utils/getUpdatedProductTeamplate'
import { productMock } from '../../../mocks/products'
import * as productsModule from '../../../store/products/middleware'

describe('Product page rate component test', () => {
  const props = {
    reviews: [1, 2, 3, 4, 5],
    productID: 'q1w2e3r4t5',
    itemNo: '1234567',
    updateOneProduct: jest.fn(),
    isLogin: true,
    showAuthModal: jest.fn()
  }

  test('snapshot test', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ProductRate {...props} />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('should render a correct revievs quantity', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ProductRate {...props} />
      </Provider>
    )
    expect(getByText(`Reviews (${props.reviews.length})`)).toBeDefined()
  })

  test('shuld have a five elems with "radio" role', () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <ProductRate {...props} />
      </Provider>
    )
    expect(getAllByRole('radio').length).toBe(5)
  })
})

describe('getUpdatedProductTeamplate util test', () => {
  const response = {
    data: productMock,
    status: 200,
  }

  test('check is getUpdatedProductTeamplate returns expected object', async () => {
    productsModule.getOneProduct = jest.fn().mockReturnValue(response)
    const expected = {
      ...productMock,
      reviews: [...productMock.reviews, 5]
    }
    const result = await getUpdatedProductTeamplate(productMock.itemNo, 5)
    expect(result).toEqual(expected)
  })

  test('check is getUpdatedProductTeamplate returns null when some troubles on server', async () => {
    productsModule.getOneProduct = jest.fn().mockReturnValue({
      ...response,
      status: 500,
    })
    const result = await getUpdatedProductTeamplate(productMock.itemNo, 5)
    expect(result).toBe(null)
  })
})