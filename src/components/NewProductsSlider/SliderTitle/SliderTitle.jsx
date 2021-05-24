import React from 'react'
import { TitleWrapper, Title, StyledAllProductsLink, } from './StylesSliderTItle'

const SliderTitle = () => (
  <TitleWrapper>
    <Title>New products</Title>
    <StyledAllProductsLink to="/catalog">See all products</StyledAllProductsLink>
  </TitleWrapper>
)
export default SliderTitle