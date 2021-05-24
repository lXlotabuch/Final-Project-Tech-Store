import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'
import SliderTitle from './SliderTitle'

describe('All tests for slider title', () => {
  test('Slider Title render test', () => {
    render(
      <Router>
        <SliderTitle />
      </Router>
    )
  })

  test('Check is title found by the correct text', () => {
    const { getByText } = render(
      <Router>
        <SliderTitle />
      </Router>
    )
    expect(getByText('New products')).toBeDefined()
  })
})