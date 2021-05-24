import React from 'react';
import { HashRouter as Router } from 'react-router-dom'

import { shallow } from 'enzyme';
import { render } from '@testing-library/react'

import {CatalogBillboard} from './CatalogBillboard';
import { CatalogBillboardWrapper, CatalogBillboardLink, CatalogBillboardTitle } from './StyledCatalogBillboard';
import { billboardMock } from '../../../mocks/billboard';

describe('CatalogBillboard component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<CatalogBillboard billboardInfo={billboardMock} />)
  })

  test('should render CatalogBillboard component', () => {
    const { asFragment } = render(
      <Router>
        <CatalogBillboard billboardInfo={billboardMock} />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('should contain CatalogBillboardWrapper', () => {
    const wrapper = component.find(CatalogBillboardWrapper)
    expect(wrapper.length).toBe(1)
  })

  test('should contain CatalogBillboardTitle', () => {
    const wrapper = component.find(CatalogBillboardTitle)
    expect(wrapper.length).toBe(1)
  })

  test('should render CatalogBillboardLink', () => {
    const link = component.find(CatalogBillboardLink)
    expect(link.length).toBe(1)
  })
})