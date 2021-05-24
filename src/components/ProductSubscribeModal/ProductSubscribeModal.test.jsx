/* eslint-disable no-unused-vars */
import { shallow } from 'enzyme'
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store/index'
import ProductSubscribeModal from './ProductSubscribeModal'

describe('All tests for productSubscribeModal', () => {
  test('Should have simple render', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ProductSubscribeModal />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('Should have the form', () => {
    const result = shallow(
      <Provider store={store}>
        <ProductSubscribeModal />
      </Provider>
    )
    expect(result.find('#subscribeOnProductsForm')).toBeDefined()
  })
})