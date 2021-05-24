import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { WishlistBox, StyledEmpty } from './StylesWishlistPage';
import { selectWishlistItems, selectIsLoading } from '../../store/wishlist/reducer'
import { ProductCard } from '../ProductCard/ProductCard'
import Heading from '../common/Heading/Heading';
import { Container } from '../common/Container';
import StyledSpinner from '../StyledSpinner/StyledSpinner'

const mapStateToProps = (state) => ({
  wishlist: selectWishlistItems(state),
  isLoading: selectIsLoading(state)
})

const Wishlist = connect(mapStateToProps, null)(({
  wishlist,
  isLoading
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  if (isLoading) return <StyledSpinner size="large" tip="Loading..." margin="100px auto" />

  const items = wishlist.map((item) => <ProductCard key={item.itemNo} productInfo={item} />)
  return (
    <Container>
      <Heading>
        My wishlist
      </Heading>
      <WishlistBox>
        {items.length ? items : <StyledEmpty description="No items have been added." />}
      </WishlistBox>
    </Container>
  )
})
export default Wishlist