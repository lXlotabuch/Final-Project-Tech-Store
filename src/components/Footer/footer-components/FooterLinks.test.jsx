import React from 'react'
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react'
import FooterLinks from './FooterLinks'

const testProps = {
  title: 'Information',
  id: 1,
  links: [
    { to: '/aboutus', text: 'About Us' },
    { to: '/', text: 'About Zip' },
    { to: '/', text: 'Privacy Policy' },
    { to: '/', text: 'Search' },
    { to: '/', text: 'Terms' },
    { to: '/', text: 'Orders and Returns' },
    { to: '/', text: 'Contact Us' },
    { to: '/', text: 'Advanced Search' },
    { to: '/', text: 'Newsletter Subscription' },
  ],
}

describe('FooterLinks', () => {
  test('Should render without crashing', () => {
    render(
      <Router>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FooterLinks {...testProps} />
      </Router>
    )
  })
  test('should render content based on props', () => {
    const { getAllByText } = render(
      <Router>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FooterLinks {...testProps} />
      </Router>
    )
    expect(getAllByText(testProps.title)).toBeDefined()
    expect(getAllByText(testProps.title)).toBeTruthy()
    testProps.links.forEach((link) => {
      expect(getAllByText(link.text)).toBeDefined()
      expect(getAllByText(link.text)).toBeTruthy()
    })
  })
})