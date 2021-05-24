/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { message } from 'antd'
import { Container } from '../common/Container'
import CartGroup from './CartGroup/CartGroup'
import {
  PageContainer,
  ProductImagesCarouselBox,
  InformationBox,
  StyledImg,
  ProductHeading,
  AboutProduct,
  PriceBox,
  PreviousPrice,
  CurrentPrice,
  ImageBox,
  FavoriteBox,
  FavoriteText,
} from './StylesProductPage'
import StyledSpinner from '../StyledSpinner/StyledSpinner'
import Carousel from '../Carousel/Carousel'
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter'
import { getOneProduct } from '../../store/products/middleware'
import ProductRate from './ProductRate/ProductRate'
import FavoriteIcon from '../FavotiteIcon/FavoriteIcon'
import carouselSettings from './utils/carouselSettings'

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const { itemNo } = useParams()
  const history = useHistory()

  useEffect(() => {
    const getProduct = async () => {
      const response = await getOneProduct(itemNo)
      if (response.status === 200) setProduct(() => response.data)
      else {
        message.error('Something went wrong')
        history.push('/')
      }
      setIsLoading(() => false)
    }
    getProduct()
  }, [history, itemNo])

  if (isLoading) return <StyledSpinner size="large" tip="...loading" margin="100px auto" />

  const promotionalProduct = product.previousPrice !== 0
  return (
    <Container>
      <PageContainer>
        <ProductImagesCarouselBox>
          <Carousel carouselSettings={carouselSettings}>
            {product.imageUrls.map((url) => (
              <ImageBox key={url}>
                <StyledImg src={url} key={url} alt="Product image" />
              </ImageBox>
            ))}
          </Carousel>
        </ProductImagesCarouselBox>
        <InformationBox>
          <ProductHeading>{upperCaseFirstLetter(product.name)}</ProductHeading>
          <PriceBox>
            {promotionalProduct && (
            <PreviousPrice>
              {product.previousPrice}
              <span>
                ₴
              </span>
            </PreviousPrice>
            )}
            <CurrentPrice promotionalProduct={promotionalProduct}>
              {product.currentPrice}
              <span>
                ₴
              </span>
            </CurrentPrice>
            
          </PriceBox>
          <div style={{ marginBottom: '6px' }}>
            Product №:
            {' '}
            {product.itemNo}
          </div>
          <ProductRate
            reviews={product.reviews}
            productID={product._id}
            itemNo={product.itemNo}
          />
          <FavoriteBox>
            <FavoriteIcon product={product} showTooltip />
            <FavoriteText>Add to favorite!</FavoriteText>
          </FavoriteBox>
          <AboutProduct>
            <li>
              Brand:
              {' '}
              <b>{product.brand}</b>
            </li>
            <li>
              Color:
              {' '}
              <b>{product.color}</b>
            </li>
            {Object.entries(product.params).map(([key, value]) => (
              <li key={key}>
                {key}
                :
                {' '}
                <b>
                  {value}
                </b>
              </li>
            ))}
            <li>
              Description:
              {' '}
              <b>
                {product.description}
                .
              </b>
            </li>
          </AboutProduct>
          <CartGroup product={product} avilableQuantity={product.quantity} />
        </InformationBox>
      </PageContainer>
    </Container>
  )
}

export default ProductPage