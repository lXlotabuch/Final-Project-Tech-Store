import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'
import { machMedia } from '../../mocks/matchMedia.mock'
import CreateCustomerPage from './CreateCustomerPage'

describe('All test for CreateCustomerPage', () => {
  beforeEach(() => {
    machMedia()
  })
  test('CreateCustomerPage render test', () => {
    render(
      <Router>
        <CreateCustomerPage />
      </Router>
    )
  })

  test('Check CustomerPage has a title', () => {
    const { getByText } = render(
      <Router>
        <CreateCustomerPage />
      </Router>
    )
    expect(getByText('Customer Registration')).toBeDefined()
  })
})