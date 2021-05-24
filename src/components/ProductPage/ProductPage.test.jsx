/* eslint-disable padded-blocks */
import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import {render, shallow} from 'enzyme'
import axios from 'axios'
import { store } from '../../store/index'
import ProductPage from './ProductPage'
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter'
import rateCalculator from '../../utils/rateCalculator'
import { productMock } from '../../mocks/products'

describe('Product page render tests', () => {
  
  test('Product Page render test', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProductPage />
        </Router>
      </Provider>
    )
  })

  test('check is animation runned', () => {
    const result = shallow(
      <Provider store={store}>
        <Router>
          <ProductPage />
        </Router>
      </Provider>,
      false
    )
    expect(result.find('svg')).toBeDefined()
  })

})
describe('check utils for Product page', () => {
  test('check is upperCaseFunction works correct', () => {
    expect(upperCaseFirstLetter('test string') === 'Test string').toBe(true)
  })
  
  test('chek is rateCalculator returns object with correct keys', () => {
    const expected = {
      reviewsQuantity: 5,
      rating: 5,
    }
    expect(rateCalculator([5, 5, 5, 5, 5])).toBeInstanceOf(Object)
    expect(rateCalculator([5, 5, 5, 5, 5])).toMatchObject(expected)
  })
})

describe('Product page ajax/lifecycle tests', () => {
  const response = {
    data: productMock
  }

  beforeEach(() => {
    axios.get.mockReturnValue(response)
  })

  test('should has a product image', () => {
    const result = shallow(
      <Provider store={store}>
        <Router>
          <ProductPage />
        </Router>
      </Provider>,
      true
    )
    expect(result.find(`[src="${productMock.imageUrls[0]}"]`)).toBeDefined()
  })

  test('Check is product has a description list', () => {
    const result = shallow(
      <Provider store={store}>
        <Router>
          <ProductPage />
        </Router>
      </Provider>,
      true
    )
    expect(result.find('ul')).toBeDefined()
    expect(result.find('li')).toBeDefined()
  })
})