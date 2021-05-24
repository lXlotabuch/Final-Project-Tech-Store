import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ReviewSlider from './ReviewSlider'

test('ReviewSlider render test', () => {
  render(
    <ReviewSlider />
  )
})