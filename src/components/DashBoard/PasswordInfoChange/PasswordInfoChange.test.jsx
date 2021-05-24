import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../../../store/index';
import PasswordInfoChange from './PasswordInfoChange';

describe('Test for PasswordInfoChange component', () => {
  test('PasswordInfoChange component', () => {
    render(
      <Provider store={store}>
        <Router>
          <PasswordInfoChange
            setShowModal={() => { }}
            info={[{ }]}
            setInfo={() => { }}
          />
        </Router>
      </Provider>
    )
  })
  test('check if button Edit is exists', () => {
    const results = shallow(
      <Provider store={store}>
        <Router>
          <PasswordInfoChange
            setShowModal={() => { }}
            info={[{ }]}
            setInfo={() => { }}
          />
        </Router>
      </Provider>,
      true
    )
    expect(results.text().includes('Edit')).toBeDefined()
  })
  test('check if button change password is exists', () => {
    const results = shallow(
      <Provider store={store}>
        <Router>
          <PasswordInfoChange
            setShowModal={() => { }}
            info={[{ }]}
            setInfo={() => { }}
          />
        </Router>
      </Provider>,
      true
    )
    expect(results.text().includes('Change Password')).toBeDefined()
  })
})
