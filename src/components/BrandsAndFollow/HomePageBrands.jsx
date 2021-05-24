import React from 'react'
import { Container } from '../common/Container'
import brandRoccat from '../../images/home-page-brands/roccat.png'
import brandMsi from '../../images/home-page-brands/msi.png'
import brandRazer from '../../images/home-page-brands/razer.png'
import brandThermaltake from '../../images/home-page-brands/thermaltake.png'
import brandAdata from '../../images/home-page-brands/adata.png'
import brandGigabite from '../../images/home-page-brands/gigabite.png'
import brandHp from '../../images/home-page-brands/hp.png'
import { Image, BrandBox, Flex } from './StyledHomePageBrands'

export const HomepageBrands = () => {
  const brands = [
    brandRoccat,
    brandMsi,
    brandRazer,
    brandThermaltake,
    brandAdata,
    brandHp,
    brandGigabite
  ];
  return (
    <Container>
      <Flex className="container">
        {brands.map((element) => (
          <BrandBox key={Math.random()}><Image src={element} alt="brand-name" /></BrandBox>))}
      </Flex>
    </Container>
  )
}

export default HomepageBrands;