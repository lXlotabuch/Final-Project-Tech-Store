import {render} from '@testing-library/react'
import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/index'
import HomePage from './HomePage'
import { machMedia } from '../../mocks/matchMedia.mock'

describe('HomePage', () => {
  beforeEach(() => machMedia())

  it('render', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    )

    expect(asFragment).toMatchSnapshot()
  })
});
