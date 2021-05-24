import React from 'react';
import { render } from '@testing-library/react';
import { OrderSummaryComponent } from './OrderSummary';

describe('OrderSummary', () => {
  test('render', () => {
    const {asFragment} = render(<OrderSummaryComponent
      summary={125478}
      shippingCost={124}
    />)

    expect(asFragment()).toMatchSnapshot()
  })
})
