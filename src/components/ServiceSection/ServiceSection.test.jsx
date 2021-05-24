import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ServiceSection from './ServiceSection'

test('ServiceSection render test', () => {
  render(
    <ServiceSection />
  )
})