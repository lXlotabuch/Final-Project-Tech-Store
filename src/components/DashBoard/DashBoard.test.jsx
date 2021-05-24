import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import { machMedia } from '../../mocks/matchMedia.mock';
import DashBoard from './DashBoard'
import { mockCustomer } from '../../mocks/customer';
import { store } from '../../store/index'

describe('Render DashBoard component', () => {
  beforeEach(() => {
    machMedia()
  })

  test('Check if animation renders', () => {
    const results = shallow(
      <Provider store={store}>
        <Router>
          <DashBoard />
        </Router>
      </Provider>,
      false
    )
    expect(results.find('svg')).toBeDefined()
  })
  test('shaphot test', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <DashBoard
          customerInfo={mockCustomer}
          isLoading={false}
        />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})