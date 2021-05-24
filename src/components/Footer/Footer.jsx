import React from 'react'
import 'antd/dist/antd.css'
import { Container } from '../common/Container'
import { FooterHeader } from './footer-components/FooterHeader'
import footerConfig from './footer-components/footer-config/footerConfig'
import FooterLinks from './footer-components/FooterLinks'
import FooterAdress from './footer-components/FooterAdress'
import FooterCopyRight from './footer-components/FooterCopyRight'
import FooterSocialNetwork from './footer-components/FooterSocialNetwork'
import FooterPayment from './footer-components/FooterPayment'
import {
  Line, StyledFooter, StyledSection, StyledWrapper, StyledWrapperFooter
} from './footer-components/footer-style-components/Styled'

const Footer = () => (
  <StyledFooter>
    <Container>
      <StyledSection>
        <FooterHeader />
        <StyledWrapper>
          {footerConfig.map((links) => (
            <FooterLinks key={links.id} title={links.title} links={links.links} id={links.id} />
          ))}
          <FooterAdress />
        </StyledWrapper>
        <Line />
        <StyledWrapperFooter>
          <FooterSocialNetwork />
          <FooterPayment />
          <FooterCopyRight />
        </StyledWrapperFooter>
      </StyledSection>
    </Container>
  </StyledFooter>
)

export default Footer