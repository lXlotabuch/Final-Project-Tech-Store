import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'
import { machMedia } from '../../../mocks/matchMedia.mock'
import SignUpBox from './SignUpBox'

describe('All tests for SignUpBox', () => {
  beforeEach(() => {
    machMedia()
  })
  test('SignUpBox render test', () => {
    render(
      <Router>
        <SignUpBox />
      </Router>
    )
  })

  test('Check is title found by a text', () => {
    const { getByText } = render(
      <Router>
        <SignUpBox />
      </Router>
    )
    expect(getByText('Create an account')).toBeDefined()
  })
})