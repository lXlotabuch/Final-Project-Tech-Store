import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { machMedia } from '../../../mocks/matchMedia.mock';
import { FormInfoChangeComponent } from './FormInfoChange'
import { store } from '../../../store/index'

describe('FormInfoChangeComponent', () => {
  beforeEach(() => {
    machMedia()
  })
  test('render', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <FormInfoChangeComponent
          setHideModal={() => {}}
          updateCustomer={() => {}}
        />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})