import React from 'react'
import PropTypes from 'prop-types'

import { StyledCatalogCardWrapper } from '../StyledCatalog'
import { ProductCard } from '../../ProductCard/ProductCard'

export const CatalogCardWrapper = ({ productsList }) => (
  <StyledCatalogCardWrapper>
    {
      productsList.map((productsItem) => (
        <ProductCard
          key={productsItem.itemNo}
          productInfo={productsItem}
        />
      ))
    }
  </StyledCatalogCardWrapper>
)

CatalogCardWrapper.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.number).isRequired,
    quantity: PropTypes.number.isRequired,
    previousPrice: PropTypes.number.isRequired,
    currentPrice: PropTypes.number.isRequired,
    itemNo: PropTypes.string.isRequired
  })).isRequired
}

export default CatalogCardWrapper