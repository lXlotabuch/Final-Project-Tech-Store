import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectProductCartCount } from '../../../store/cart/reducer'
import {
  CartWrapper, ShoppingCartOutlinedStyled, StyledCount, Amount
} from './StyledCartIcon'

const mapStateToProps = (state) => ({productCartCount: selectProductCartCount(state)})

const CartIcon = connect(mapStateToProps, null)(({productCartCount}) => (
  <CartWrapper>
    <Link to="/cart" style={{outline: 'none'}}>
      <ShoppingCartOutlinedStyled />
      {productCartCount > 0
        ? (
          <StyledCount>
            <Amount>
              {productCartCount}
            </Amount>
          </StyledCount>
        )
        : null}
      
    </Link>
  </CartWrapper>
))

export default CartIcon