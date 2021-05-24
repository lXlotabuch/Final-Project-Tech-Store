import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'
import { shallow } from 'enzyme'
import { machMedia } from '../../../../mocks/matchMedia.mock'
import SignUpForm from './SignUpForm'

describe('All test for Sign Up Form', () => {
  beforeEach(() => {
    machMedia()
  })
  test('SignUpForm render test', () => {
    render(
      <Router>
        <SignUpForm />
      </Router>
    )
  })
  
  test('Check is form found by id', () => {
    const result = shallow(
      <Router>
        <SignUpForm />
      </Router>
    )
    expect(result.find('#sign-up-form')).toBeDefined()
  })

  test('Check is form has a required inputs', () => {
    const { getByLabelText } = render(
      <Router>
        <SignUpForm />
      </Router>
    )
    expect(getByLabelText('First name')).toBeDefined()
    expect(getByLabelText('Last name')).toBeDefined()
    expect(getByLabelText('Login')).toBeDefined()
    expect(getByLabelText('Email')).toBeDefined()
    expect(getByLabelText('Password')).toBeDefined()
    expect(getByLabelText('Confrim password')).toBeDefined()
    expect(getByLabelText('Login')).toBeDefined()
  })

  test('Check is form has a submit button', () => {
    const result = shallow(
      <Router>
        <SignUpForm />
      </Router>
    )
    expect(result.find('button [type="submit"]')).toBeDefined()
  })

  test('Check is button found by a text', () => {
    const { getByText } = render(
      <Router>
        <SignUpForm />
      </Router>
    )
    expect(getByText('Submit')).toBeDefined()
  })
})