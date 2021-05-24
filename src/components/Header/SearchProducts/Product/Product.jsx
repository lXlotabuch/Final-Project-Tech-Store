import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  PriceWrapper,
  ProductCurrentPrice,
  ProductDescription,
  ProductFullPrice, ProductImg, ProductInfo, ProductWrapper
} from './StyledProduct'
import {StarRating} from '../../../StarRating/StarRating';
import rateCalculator from '../../../../utils/rateCalculator';
import { CardReviews, RatingBox } from '../../../ProductCard/StyledProductCard';

export const Product = ({product, reset}) => {
  const { reviewsQuantity, rating } = rateCalculator(product.reviews)
  const discount = Boolean(product.previousPrice)

  return (
    <Link onClick={reset} to={`/products/${product.itemNo}`}>
      <ProductWrapper>
        <ProductImg>
          <img src={product.imageUrls[0]} alt="Product IMG" />
        </ProductImg>
        <ProductInfo>
          <div style={{fontSize: 10}}>{product.name}</div>
          <ProductDescription>{product.description}</ProductDescription>
          <RatingBox>
            <StarRating rating={rating} />
            <CardReviews>
              Reviews (
              {reviewsQuantity}
              )
            </CardReviews>
          </RatingBox>
        </ProductInfo>
        <PriceWrapper>
          {discount ? <ProductFullPrice>{product.previousPrice}</ProductFullPrice> : null}
          <ProductCurrentPrice discount={discount}>{`${product.currentPrice} ₴`}</ProductCurrentPrice>
        </PriceWrapper>
      </ProductWrapper>
    </Link>
  )
}

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  reset: PropTypes.func.isRequired
}

export default Product
