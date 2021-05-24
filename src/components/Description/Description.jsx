import React from 'react';
import {Container} from '../common/Container';
import { MainHeading, StyledDescription } from './StyledDescription';

const Description = () => (
  <Container>
    <MainHeading>
      Online store TechStore
    </MainHeading>
    <StyledDescription>
      The online electronics store TechStore offers
      a wide range of computer technology and electronics.
      Constant price monitoring allows you to buy equipment
      for home and office at the lowest price. The range includes
      brands such as AOC, MSI, LG, Samsung, Philips, Apple, Lenovo,
      Huawei, Asus, HP, Dell, Artline, Everest, Address. Most of the
      presented brands have service centers throughout Ukraine, which
      simplifies the warranty service of the purchased computer equipment
      and electronics. Availability of goods in a warehouse in combination
      with low prices ensures fast delivery to Kiev, Dnipro, Odessa, Lvov, Kharkov.
    </StyledDescription>
  </Container>
)

export default Description