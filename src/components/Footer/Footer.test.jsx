import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme'
import { store } from '../../store/index'
import Footer from './Footer'

describe('Footer', () => {
  test('Should render without crashing', () => {
    const result = shallow(
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>
    )
    expect(result.find('div')).toBeDefined()
  })
})