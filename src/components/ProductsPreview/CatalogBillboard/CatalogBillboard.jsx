import React from 'react'
import PropTypes from 'prop-types'
import {
  CatalogBillboardWrapper,
  CatalogBillboardTitle,
  CatalogBillboardLink
} from './StyledCatalogBillboard'

export const CatalogBillboard = ({ billboardInfo }) => {
  const {
    title, img, url, category
  } = billboardInfo

  return (
    <CatalogBillboardWrapper src={img}>
      <CatalogBillboardTitle>{title}</CatalogBillboardTitle>
      <CatalogBillboardLink
        to={url}
        onClick={() => window.scrollTo(0, 0)}
      >
        {`View all ${category}`}
      </CatalogBillboardLink>
    </CatalogBillboardWrapper>
  )
}

CatalogBillboard.propTypes = {
  billboardInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired
}

export default CatalogBillboard
