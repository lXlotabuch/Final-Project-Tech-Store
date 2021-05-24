/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  fireEvent, render, screen, waitFor
} from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { FormCheckoutComponent } from './FormCheckout';
import { productsMock } from '../../../mocks/products';
import { citiesMock } from '../../../mocks/cities';
import { branchesMock } from '../../../mocks/branches';
import { machMedia } from '../../../mocks/matchMedia.mock';

describe('FormCheckoutComponent', () => {
  beforeEach(() => {
    machMedia()
  })
  test('render', () => {
    const {asFragment} = render(<FormCheckoutComponent
      products={productsMock}
      shippingCost={121}
      customer={{
        customerNo: '82724063',
        email: 'o.titova.ua@gmail.com',
        enabled: true,
        firstName: 'test',
        isAdmin: true,
        lastName: 'test',
        telephone: '+380660788828',
        _id: '602ff192ad29b70015add9ab'
      }}
      branches={branchesMock}
      cities={citiesMock}
      getBranches={() => {}}
      placeOrder={() => {}}
      getShippingCost={() => {}}
    />)
    expect(asFragment()).toMatchSnapshot()
  });

  test('render with empty customer', () => {
    render(<FormCheckoutComponent
      products={productsMock}
      shippingCost={121}
      customer={{}}
      branches={branchesMock}
      cities={citiesMock}
      getBranches={() => {}}
      placeOrder={() => {}}
      getShippingCost={() => {}}
    />)
    expect(screen.getByLabelText(/email/i).value).toBe('')
    expect(screen.getByLabelText(/first name/i).value).toBe('')
    expect(screen.getByLabelText(/last name/i).value).toBe('')
    expect(screen.getByLabelText(/phone number/i).value).toBe('+380')
  });

  it('handle city change', async () => {
    const getBranches = jest.fn();
    render(<FormCheckoutComponent
      products={productsMock}
      shippingCost={121}
      customer={{
        customerNo: '82724063',
        email: 'o.titova.ua@gmail.com',
        enabled: true,
        firstName: 'test',
        isAdmin: true,
        lastName: 'test',
        telephone: '+380660788828',
        _id: '602ff192ad29b70015add9ab'
      }}
      branches={[]}
      cities={citiesMock}
      getBranches={getBranches}
      placeOrder={() => {}}
      getShippingCost={() => {}}
    />)

    fireEvent.mouseDown(screen.getByLabelText(/city/i))

    await waitFor(() => screen.getByTitle('Kyiv'))

    fireEvent.click(screen.getByTitle('Kyiv'))

    expect(getBranches).toBeCalledWith('8d5a980d-391c-11dd-90d9-001a92567626')
  });

  it('handle branch change', async () => {
    const getShippingCost = jest.fn();
    render(<FormCheckoutComponent
      products={productsMock}
      shippingCost={121}
      customer={{
        customerNo: '82724063',
        email: 'o.titova.ua@gmail.com',
        enabled: true,
        firstName: 'test',
        isAdmin: true,
        lastName: 'test',
        telephone: '+380660788828',
        _id: '602ff192ad29b70015add9ab'
      }}
      branches={branchesMock}
      cities={citiesMock}
      getBranches={() => {}}
      placeOrder={() => {}}
      getShippingCost={getShippingCost}
    />)

    fireEvent.mouseDown(screen.getByLabelText(/city/i))

    let cityEl;
    await waitFor(() => cityEl = screen.getByTitle('Kyiv'))

    fireEvent.click(cityEl)

    fireEvent.mouseDown(screen.getByLabelText(/№ branch/i))

    let branchEl;
    await waitFor(() => branchEl = screen.getByTitle('Branch name'))

    fireEvent.click(branchEl)

    expect(getShippingCost).toBeCalled();

    expect(getShippingCost.mock.calls[0][0]).toMatchObject({
      current: {
        props: {
          value: '8d5a980d-391c-11dd-90d9-001a92567626'
        }
      }
    })
  });

  it('handle put order', async () => {
    const placeOrder = jest.fn();
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FormCheckoutComponent
          products={productsMock}
          shippingCost={121}
          customer={{
            customerNo: '82724063',
            email: 'o.titova.ua@gmail.com',
            enabled: true,
            firstName: 'test',
            isAdmin: true,
            lastName: 'test',
            telephone: '+380660788828',
            _id: '602ff192ad29b70015add9ab'
          }}
          branches={branchesMock}
          cities={citiesMock}
          getBranches={() => {}}
          placeOrder={placeOrder}
          getShippingCost={() => {}}
        />
      </Router>
    )
    fireEvent.mouseDown(screen.getByLabelText(/city/i))
    let cityEl;
    await waitFor(() => cityEl = screen.getByTitle('Kyiv'))
    fireEvent.click(cityEl)
    fireEvent.mouseDown(screen.getByLabelText(/№ branch/i))
    let branchEl;
    await waitFor(() => branchEl = screen.getByTitle('Branch name'))
    fireEvent.click(branchEl)
    fireEvent.click(screen.getByRole('button', {name: /place order/i}))
    await waitFor(() => expect(placeOrder).toBeCalled())
    expect(placeOrder.mock.calls[0]).toEqual([
      productsMock,
      {
        country: 'Ukraine',
        email: 'o.titova.ua@gmail.com',
        firstName: 'test',
        lastName: 'test',
        phoneNumber: '+380660788828',
        recipientBranch: 'Branch name',
        recipientCity: '8d5a980d-391c-11dd-90d9-001a92567626',
      },
      {
        _id: '602ff192ad29b70015add9ab',
        customerNo: '82724063',
        email: 'o.titova.ua@gmail.com',
        enabled: true,
        firstName: 'test',
        isAdmin: true,
        lastName: 'test',
        telephone: '+380660788828',
      },
      121,
      'Payment at the time of receipt of the goods',
    ])

    expect(history.location.pathname).toBe('/order')
  });
})
