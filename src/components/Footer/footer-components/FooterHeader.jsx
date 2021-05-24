import React from 'react'
import { FooterTitle, FooterTitleText, StyledWrapperHeader } from './footer-style-components/Styled'
import FooterSubscribe from './FooterSubscribe'

export const FooterHeader = () => (
  <StyledWrapperHeader>
    <div>
      <FooterTitle>Sign Up To Our Newsletter.</FooterTitle>
      <FooterTitleText>Be the first to hear about the latest offers.</FooterTitleText>
    </div>
    <div>
      <FooterSubscribe />
    </div>
  </StyledWrapperHeader>
)

export default FooterHeader