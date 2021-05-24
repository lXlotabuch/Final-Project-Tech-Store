/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history';
import { SummaryComponent } from './Summary';

describe('SummaryComponents', () => {
  test('render', () => {
    const {asFragment} = render(<SummaryComponent
      summary={156985}
    />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('handle go to checkout', () => {
    const onClick = jest.fn()
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <SummaryComponent
          summary={156985}
          onClick={onClick}
        />
      </Router>
    )
    fireEvent.click(screen.getByRole('button', {name: /proceed to checkout/i}))
    expect(history.location.pathname).toBe('/checkout')
  })

  test('handle show message', () => {
    const onClick = jest.fn()
    const {getByText} = render(
      <SummaryComponent
        summary={0}
        onClick={onClick}
      />
    )
    fireEvent.click(screen.getByRole('button', {name: /proceed to checkout/i}))

    expect(getByText('Your shopping cart is empty. Please add items to your shopping cart')).toBeDefined()
  })
})