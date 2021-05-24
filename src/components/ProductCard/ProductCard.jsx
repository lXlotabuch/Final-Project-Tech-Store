import React from 'react'
import { Link } from 'react-router-dom';

// Compomemts
import { connect } from 'react-redux';
import { InStock } from './InStock/InStock';
import { ProductSoldOut } from './ProductSoldOut/ProductSoldOut';
import { StarRating } from '../StarRating/StarRating'
import StyledButton from '../common/Buttons/StyledButton'
import FavoriteIcon from '../FavotiteIcon/FavoriteIcon'

// Styles
import {
  CardItem,
  CardReviews,
  CardTitle,
  CardImage,
  ReviewsBox,
  ImageWrapper,
  PurchaseGroup,
  PriceBox,
  CardLastPrice,
  CardCurrentPrice,
  RatingBox,
} from './StyledProductCard'

// Functions
import cutString from '../../utils/cutString';
import rateCalculator from '../../utils/rateCalculator';
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter';
import { addToCart } from '../../store/cart/middleware'
import { showSubscribeModal } from '../../store/subscriceOnProductModal/middleware'

export const ProductCard = connect(null, { addToCart, showSubscribeModal })((
  {
    productInfo,
    addToCart,
    showSubscribeModal,
  }
) => {
  const {
    name,
    imageUrls,
    reviews,
    previousPrice,
    currentPrice,
    quantity,
    itemNo,
  } = productInfo

  const isAvilable = quantity > 0
  const promotionalProduct = previousPrice !== 0
  const verifiedTitle = upperCaseFirstLetter(cutString(name, 38))
  const { reviewsQuantity, rating } = rateCalculator(reviews)

  return (
    <CardItem className="hidden">

      <Link to={`products/${itemNo}`}>
        <ImageWrapper>
          <CardImage src={imageUrls[0]} />
        </ImageWrapper>
      </Link>

      <ReviewsBox>
        <RatingBox>
          <StarRating rating={rating} />
          <CardReviews>
            Reviews (
            {reviewsQuantity}
            )
          </CardReviews>
        </RatingBox>
        <FavoriteIcon
          product={productInfo}
          small
          showTooltip
        />
      </ReviewsBox>
      {isAvilable ? <InStock /> : <ProductSoldOut /> }

      <Link to={`products/${itemNo}`}>
        <CardTitle>
          {verifiedTitle}
        </CardTitle>
      </Link>

      <PurchaseGroup>
        <PriceBox>
          {promotionalProduct && (
          <CardLastPrice>
            {`${previousPrice} ₴`}
          </CardLastPrice>
          )}
          <CardCurrentPrice promotionalProduct={promotionalProduct}>
            {`${currentPrice} ₴`}
          </CardCurrentPrice>
        </PriceBox>
        {isAvilable ? (
          <StyledButton
            size="xs"
            shape="round"
            onClick={() => addToCart(productInfo, 1)}
          >
            Add to cart
          </StyledButton>
        ) : (
          <StyledButton
            color="borderGrey"
            size="xs"
            shape="round"
            onClick={showSubscribeModal}
          >
            Check avilabiliy
          </StyledButton>
        )}
        
      </PurchaseGroup>
    </CardItem>
  )
})

export default ProductCard;
