/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IconWrapper } from './StylesFavoriteIcon'
import { selectWishlistItems } from '../../store/wishlist/reducer'
import { addProductToWishlist, removeProductFromWishlist } from '../../store/wishlist/middleware'

const mapStateToProps = (state) => ({wishlistItems: selectWishlistItems(state)})

const FavoriteIcon = connect(mapStateToProps, { addProductToWishlist, removeProductFromWishlist })((
  {
    wishlistItems,
    product,
    addProductToWishlist,
    removeProductFromWishlist,
    small,
    showTooltip
  }
) => {
  const isFavorite = Boolean(wishlistItems.find((item) => item._id === product._id))

  const chooseHandler = () => (
    isFavorite
      ? removeProductFromWishlist(product)
      : addProductToWishlist(product)
  )
    
  return (
    <IconWrapper
      isFavorite={isFavorite}
      onClick={chooseHandler}
      small={small}
      showTooltip={showTooltip}
      data-testid="favorite-icon"
    >
      <svg width={small ? 27 : 35} height={small ? 24 : 32} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.68513 2.82536L8.39535 3.54187L9.10557 2.82536C9.77879 2.14617 10.8139 1.375 11.8922 1.375C12.9606 1.375 13.8026 1.73075 14.3714 2.278C14.9374 2.82255 15.2936 3.61414 15.2936 4.60948C15.2936 5.68046 14.8643 6.59251 14.1287 7.47611C13.3739 8.3829 12.3563 9.19134 11.2509 10.0643L11.2252 10.0846C10.2883 10.8241 9.24578 11.647 8.39584 12.5675C7.55422 11.655 6.52157 10.8387 5.59303 10.1047L5.54239 10.0646L5.54198 10.0643C4.43628 9.19109 3.4189 8.38246 2.66433 7.47571C1.92905 6.59215 1.5 5.68023 1.5 4.60948C1.5 3.61414 1.8562 2.82257 2.42223 2.27804C2.99108 1.73079 3.83327 1.375 4.9021 1.375C5.97913 1.375 7.01114 2.14538 7.68513 2.82536Z" strokeWidth="1" />
      </svg>
    </IconWrapper>
  )
})
FavoriteIcon.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  wishlistItems: PropTypes.instanceOf(Array),
  addProductToWishlist: PropTypes.func,
  removeProductFromWishlist: PropTypes.func,
  small: PropTypes.bool,
  showTooltip: PropTypes.bool
}

export default FavoriteIcon
