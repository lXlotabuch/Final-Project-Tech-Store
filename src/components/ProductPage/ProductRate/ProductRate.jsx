import React, { useCallback, useState } from 'react'
import { message, Rate } from 'antd'
import { connect } from 'react-redux'
import { RateBox, ReviewsCount } from './StylesProductRate'
import { updateOneProduct } from '../../../store/products/middleware'
import rateCalculator from '../../../utils/rateCalculator'
import { selectIsLogin } from '../../../store/auth/reducer'
import { showAuthModal } from '../../../store/authModal/middleware'
import { getUpdatedProductTeamplate } from './utils/getUpdatedProductTeamplate'
import { selectCustomerInfo } from '../../../store/customer/reducer'
import { updateCustomer } from '../../../store/customer/middleware'

const mapStateToProps = (state) => ({
  isLogin: selectIsLogin(state),
  customer: selectCustomerInfo(state)
})

const ProductRate = connect(mapStateToProps, { updateOneProduct, showAuthModal, updateCustomer })(({
  reviews,
  productID,
  itemNo,
  updateOneProduct,
  updateCustomer,
  isLogin,
  showAuthModal,
  customer
}) => {
  const { rating, reviewsQuantity } = rateCalculator(reviews)

  const [rate, setRate] = useState(rating)
  const [reviewsCount, setReviewsCount] = useState(reviewsQuantity)
  
  const handleChange = useCallback(async (currentRate) => {
    const value = currentRate !== 0 ? currentRate : rate

    if (!isLogin) {
      showAuthModal('Please, log in to rate this product.')
      return
    }
    const checkIsRated = Boolean(customer.ratedProducts.find((itemCode) => itemCode === itemNo))
    
    if (checkIsRated) {
      message.info('You have rated this item before.')
      return
    }
    
    setRate(value)
    updateCustomer({ratedProducts: [...customer.ratedProducts, itemNo]})

    const updatedProduct = await getUpdatedProductTeamplate(itemNo, value)
    const result = await updateOneProduct(productID, updatedProduct)
    if (!result || result.status !== 200) return
    
    const newReviewsArr = result.data.reviews
    const { reviewsQuantity } = rateCalculator(newReviewsArr)
    setReviewsCount(reviewsQuantity)
  }, [
    customer.ratedProducts, isLogin, itemNo, productID,
    rate, showAuthModal, updateCustomer, updateOneProduct
  ])
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

  return (
    <RateBox>
      <ReviewsCount>
        Reviews (
        {reviewsCount}
        )
      </ReviewsCount>
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={rate} />
      </span>
    </RateBox>
  )
})

export default ProductRate