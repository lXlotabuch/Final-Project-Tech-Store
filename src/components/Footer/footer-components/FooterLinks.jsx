import React from 'react'
import PropTypes from 'prop-types'
import {
  FooterLinksTitle, FooterLinkItem, Content, Accordion, StyledCheckBox, LineMobile
} from './footer-style-components/Styled'

const FooterLinks = ({ title, links, id }) => (
  <Accordion>
    <StyledCheckBox type="checkbox" id={id} />
    <FooterLinksTitle htmlFor={id}>{title}</FooterLinksTitle>
    <Content>
      {links.map((link) => (
        <FooterLinkItem key={link.text} to={link.to} onClick={() => window.scrollTo(0, 0)}>
          {link.text}
        </FooterLinkItem>
      ))}
    </Content>
    <LineMobile />
  </Accordion>
)

FooterLinks.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export default FooterLinks