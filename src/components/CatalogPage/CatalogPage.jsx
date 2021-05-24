import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { getMinMaxPrice } from '../../store/catalog/middleware'
import {Container} from '../common/Container'
import Heading from '../common/Heading/Heading'
import CatalogFilter from './CatalogFilter/CatalogFilter'
import CatalogProductsPlace from './CatalogProductsPlace/CatalogProductsPlace'
import CatalogSort from './CatalogSort/CatalogSort'
import { CatalogProducts, Flex } from './StyledCatalogPage'

const CatalogPage = connect(null, {getMinMaxPrice})(({getMinMaxPrice}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    getMinMaxPrice()
  }, [getMinMaxPrice])
  
  return (
    <Container>
      <Heading>Products</Heading>
      <Flex>
        <CatalogFilter
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />
        <CatalogProducts>
          <CatalogSort
            setShowFilter={setShowFilter}
          />
          <CatalogProductsPlace />
        </CatalogProducts>
      </Flex>
    </Container>
  )
})

export default CatalogPage