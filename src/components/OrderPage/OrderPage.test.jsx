/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { OrderPageComponent } from './OrderPage';

jest.mock('./OrderInfo/OrderInfo', () => 'order-info')

describe('OrderPageComponent', () => {
  test('render', () => {
    const history = createMemoryHistory()
    const {asFragment} = render(
      <Router history={history}>
        <OrderPageComponent
          isLogin={false}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('handle go to homePage', () => {
    const onClickHome = jest.fn()
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <OrderPageComponent
          isLogin={false}
          onClickHome={onClickHome}
        />
      </Router>
    )
    fireEvent.click(screen.getByRole('button', {name: /back to homepage/i}))
    expect(history.location.pathname).toBe('/')
  })

  test('handle go to dashboard', () => {
    const onClickDashboard = jest.fn()
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <OrderPageComponent
          isLogin
          onClickDashboard={onClickDashboard}
        />
      </Router>
    )
    fireEvent.click(screen.getByRole('button', {name: /go to dashboard/i}))
    expect(history.location.pathname).toBe('/dashboard')
  })
})