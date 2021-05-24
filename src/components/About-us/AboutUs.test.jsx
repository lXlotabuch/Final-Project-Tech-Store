import React from 'react'
import {render} from '@testing-library/react'
import AboutUsPage from './AboutUs'

describe('AboutUs', () => {
  test('render', () => {
    const {asFragment} = render(<AboutUsPage />)
    expect(asFragment()).toMatchSnapshot()
  })
})