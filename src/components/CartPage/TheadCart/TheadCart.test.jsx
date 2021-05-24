import {render} from '@testing-library/react'
import shallow from 'enzyme/build/shallow'
import React from 'react'
import { machMedia } from '../../../mocks/matchMedia.mock'
import TheadCart from './TheadCart'

describe('TheadCart', () => {
  beforeEach(() => {
    machMedia()
  })
  test('render', () => {
    const {asFragment} = render(<TheadCart />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('to have .subtotal', () => {
    const component = shallow(<TheadCart />)
    const wrapper = component.find('.subtotal')
    expect(wrapper.length).toBe(1)
  })
})