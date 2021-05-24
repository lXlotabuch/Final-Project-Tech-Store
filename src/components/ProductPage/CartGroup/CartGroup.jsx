import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CartGroupBox, FlexBox, AvilableQuantityBox } from './StylesCartGroup'
import InputGroup from './InputGroup/InputGroup'
import StyledButton from '../../common/Buttons/StyledButton'
import checkValue from '../../../utils/checkValue'
import { addToCart } from '../../../store/cart/middleware'
import { showSubscribeModal } from '../../../store/subscriceOnProductModal/middleware'

const CartGroup = connect(null, { addToCart, showSubscribeModal })((
  {
    product,
    avilableQuantity,
    addToCart,
    showSubscribeModal,
  }
) => {
  const [quantity, setQuanity] = useState(avilableQuantity > 0 ? 1 : 0)
  const inputHandler = (e) => {
    const value = +e.target.value.trim()
    if (!checkValue(value, avilableQuantity)) return
    setQuanity(() => value)
  }
  
  const increaseHandler = () => {
    const isValid = checkValue(quantity + 1, avilableQuantity)
    return isValid ? setQuanity((prevValue) => prevValue + 1) : null
  }
  const decreaseHandler = () => {
    const isValid = checkValue(quantity - 1, avilableQuantity)
    return isValid ? setQuanity((prevValue) => prevValue - 1) : null
  }
  
  const isAvilable = avilableQuantity > 0
  return (
    <CartGroupBox>
      <AvilableQuantityBox>
        {isAvilable ? `Avilable quantity: ${avilableQuantity} pc.` : ' The item is out of stock.'}
      </AvilableQuantityBox>
      <FlexBox>
        <InputGroup
          decreaseHandler={decreaseHandler}
          increaseHandler={increaseHandler}
          inputHandler={inputHandler}
          quantity={quantity}
        />
        {isAvilable ? (
          <StyledButton
            size="lg"
            shape="round"
            onClick={() => addToCart(product, quantity)}
          >
            Add to cart
          </StyledButton>
        ) : (
          <StyledButton
            color="borderGrey"
            size="lg"
            shape="round"
            onClick={showSubscribeModal}
          >
            Check avilabiliy
          </StyledButton>
        )}
      </FlexBox>
    </CartGroupBox>
  )
})

CartGroup.propTypes = {
  product: PropTypes.instanceOf(Object),
  avilableQuantity: PropTypes.number,
  addToCart: PropTypes.func
}

export default CartGroup