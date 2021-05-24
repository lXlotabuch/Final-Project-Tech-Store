/* eslint-disable no-param-reassign */
const rateCalculator = (reviewsArray) => {
  const checked = reviewsArray.filter((el) => Number.isInteger(el) && el <= 5 && el > 0)
  const reviewsSum = checked.reduce((acc, el) => acc += el, 0)
  const reviewsQuantity = checked.length
  
  return {
    reviewsQuantity,
    rating: Math.round(reviewsSum / reviewsQuantity) || 0
  }
}
export default rateCalculator