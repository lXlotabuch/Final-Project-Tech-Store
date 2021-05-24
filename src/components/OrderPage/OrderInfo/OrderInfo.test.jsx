import React from 'react';
import { render } from '@testing-library/react';
import { citiesMock } from '../../../mocks/cities';
import { orderMock } from '../../../mocks/order';
import { OrderInfoComponent } from './OrderInfo';

describe('OrderInfoComponent', () => {
  test('render', () => {
    const {asFragment} = render(<OrderInfoComponent
      order={orderMock}
      cities={citiesMock}
      isLoading={false}
    />)
    expect(asFragment()).toMatchSnapshot()
  })
})