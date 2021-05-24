import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'
import { shallow } from 'enzyme'
import LoginPageLink from './LoginPageLink'

describe('All test for LoginPageLink', () => {
  test('LoginPageLink render test', () => {
    render(
      <Router>
        <LoginPageLink />
      </Router>
    )
  })

  test('Check is title has been renderend', () => {
    const { getByText } = render(
      <Router>
        <LoginPageLink />
      </Router>
    )
    expect(getByText('Already registered ?')).toBeDefined()
  })

  test('Check is Link has a correct href', () => {
    const result = shallow(
      <Router>
        <LoginPageLink />
      </Router>
    )
    expect(result.find('[href="#/signin"]')).toBeDefined()
  })

  test('Check is Link found by text', () => {
    const { getByText } = render(
      <Router>
        <LoginPageLink />
      </Router>
    )
    expect(getByText('Sign In')).toBeDefined()
  })
})