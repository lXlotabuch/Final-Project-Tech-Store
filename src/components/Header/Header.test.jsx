import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Header';
import { store } from '../../store/index';

describe('Test Header', () => {
  test('Header filter render test', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    )
  })
})
