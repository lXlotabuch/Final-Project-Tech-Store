import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import { machMedia } from '../../../mocks/matchMedia.mock';
import CatalogFilter from './CatalogFilter';
import { store } from '../../../store/index'

describe('All test for catalog filter', () => {
  beforeEach(() => {
    machMedia()
  })
  test('Catalog filter render test', () => {
    render(
      <Provider store={store}>
        <Router>
          <CatalogFilter showFilter setShowFilter={() => {}} />
        </Router>
      </Provider>
    )
  })
  test('check button render', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Router>
          <CatalogFilter
            showFilter
            setShowFilter={() => {}}
          />
        </Router>
      </Provider>
    )
    expect(getByText('Apply Filter')).toBeDefined()
  })
})