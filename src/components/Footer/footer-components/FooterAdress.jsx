import React from 'react'
import {
  FooterLinksTitle, FooterAdressLink, FooterTextContacts,
  Accordion, StyledCheckBox, Content, LineMobile
} from './footer-style-components/Styled'

const FooterDesctops = () => (
  <Accordion>
    <StyledCheckBox type="checkbox" id={5} />
    <FooterLinksTitle htmlFor={5}>Address</FooterLinksTitle>
    <Content>
      <FooterTextContacts>Address: 1234 Street Adress City Address, 1234</FooterTextContacts>
      <FooterTextContacts>
        Phones:
        <FooterAdressLink href="tel: +380504432255"> (00) 1234 5678</FooterAdressLink>
      </FooterTextContacts>
      <FooterTextContacts>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</FooterTextContacts>
      <FooterTextContacts>Friday: 9:00 AM - 6:00 PM</FooterTextContacts>
      <FooterTextContacts>Saturday: 11:00 AM - 5:00 PM</FooterTextContacts>
      <FooterTextContacts>
        E-mail:
        <FooterAdressLink href="mailto:ptopdruk@gmail.com"> shop@email.com</FooterAdressLink>
      </FooterTextContacts>
    </Content>
    <LineMobile />
  </Accordion>
)

export default FooterDesctops