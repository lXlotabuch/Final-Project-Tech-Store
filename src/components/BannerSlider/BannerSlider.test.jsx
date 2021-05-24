import React from 'react'
import { render } from '@testing-library/react'
import { machMedia } from '../../mocks/matchMedia.mock'
import { BannerSlider } from './BannerSlider'

describe('BannerSlider', () => {
  beforeEach(() => {
    machMedia()
  })
  test('BannerSlider render test', () => {
    const {asFragment} = render(
      <BannerSlider />
    )
      
    expect(asFragment()).toMatchSnapshot()
  })
})