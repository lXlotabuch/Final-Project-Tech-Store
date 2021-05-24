import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import Carousel from './Carousel'

describe('All tests for Carousel', () => {
  test('render test with childrens & props', () => {
    render(
      <Carousel carouselSettings={{ dots: false }}>
        <div>Some tag</div>
        <div>Some tag</div>
        <div>Some tag</div>
      </Carousel>
    )
  })

  test('check is chilrens found', () => {
    const { getAllByText } = render(
      <Carousel carouselSettings={{ dots: false }}>
        <div>Some children</div>
        <div>Some children</div>
        <div>Some children</div>
      </Carousel>
    )
    expect(getAllByText('Some children')).toBeDefined()
    expect(getAllByText('Some children')).toBeTruthy()
  })
  
  test('Check is carousel has a dots', () => {
    const result = shallow(
      <Carousel carouselSettings={{ dots: true }}>
        <div>Some children</div>
        <div>Some children</div>
        <div>Some children</div>
      </Carousel>
    )
    expect(result.find('ul .slick-dots')).toBeDefined()
  })
})