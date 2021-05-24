/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Empty } from 'antd';
import { useHistory } from 'react-router-dom';
import TheadCart from '../TheadCart/TheadCart';
import CartItem from '../CartItem/CartItem';
import { ColumnRowBetween} from '../Flex';
import StyledButton from '../../common/Buttons/StyledButton';
import StyledCartList from './StyledCartList';
import { clearCart } from '../../../store/cart/middleware';
import { selectProducts } from '../../../store/cart/reducer';

export const CartListComponent = ({
  products,
  clearCart,
}) => {
  const history = useHistory()

  const onClickContinue = () => {
    history.push('/')
  }
  const showCartItem = (productsAll) => productsAll.map((item) => (
    <CartItem
      product={item.product}
      cartQuantity={item.cartQuantity}
      key={item.product._id}
    />
  ))

  return (
    <StyledCartList>
      <TheadCart />
      {products.length ? showCartItem(products) : (
        <Empty description={false}>
          <span>Your shopping cart is empty</span>
        </Empty>
      )}
      <ColumnRowBetween>
        <div className="margin">
          <StyledButton onClick={onClickContinue} size="xl" shape="round" color="borderGrey">Continue Shopping</StyledButton>
        </div>
        <div className="margin">
          <StyledButton onClick={() => clearCart()} size="xl" shape="round" color="black">Clear Shopping Cart</StyledButton>
        </div>
      </ColumnRowBetween>
    </StyledCartList>
  )
}

const mapStateToProps = (state) => ({
  products: selectProducts(state),
})

const CartList = connect(
  mapStateToProps, {
    clearCart
  }
)(CartListComponent)

CartListComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
      imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
      name: PropTypes.string.isRequired,
      currentPrice: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      itemNo: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  clearCart: PropTypes.func.isRequired,
}

export default CartList;