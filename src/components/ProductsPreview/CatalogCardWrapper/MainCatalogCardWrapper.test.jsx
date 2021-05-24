import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react'

import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../store/index'

import { CatalogCardWrapper } from './MainCatalogCardWrapper'
import { productMock } from '../../../mocks/products';

test('should render CatalogCardWrapper component', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        <CatalogCardWrapper productsList={[productMock]} />
      </Router>
    </Provider>
  )
  expect(asFragment()).toMatchSnapshot()
})