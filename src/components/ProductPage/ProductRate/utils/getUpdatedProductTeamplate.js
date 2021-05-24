import { getOneProduct } from '../../../../store/products/middleware'

export const getUpdatedProductTeamplate = async (itemNo, value) => {
  const response = await getOneProduct(itemNo)
  if (!response || response.status !== 200) return null
    
  const product = response.data
  const reviewsArr = product.reviews
    
  const updatedProduct = {
    ...product,
    reviews: [...reviewsArr, value]
  }
  return updatedProduct
}
export default getUpdatedProductTeamplate