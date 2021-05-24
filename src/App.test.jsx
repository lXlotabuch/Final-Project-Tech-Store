import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import {render} from '@testing-library/react'
import axios from 'axios'
import { store } from './store/index'
import App from './App'
import { machMedia } from './mocks/matchMedia.mock'

describe('App', () => {
  beforeEach(() => {
    machMedia()

    axios.get.mockReturnValue(Promise.resolve({
      status: 200,
      data: {}
    }))
  })

  it('render', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
    
    expect(asFragment()).toMatchSnapshot()
  })
});
