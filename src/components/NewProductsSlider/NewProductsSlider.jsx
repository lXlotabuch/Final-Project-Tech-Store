import React from 'react'
import { connect } from 'react-redux'
import Carousel from '../Carousel/Carousel'
import { ProductCard } from '../ProductCard/ProductCard'
import { Container } from '../common/Container'
import SliderTitle from './SliderTitle/SliderTitle'
import { ItemWrapper } from './StylesNewProductSlider'
import carouselSettings from './carouselSettings'
import StyledSpinner from '../StyledSpinner/StyledSpinner'
import { selectIsLoading, selectNewProducts } from '../../store/products/reducer'

const mapStateToProps = (state) => ({
  newProducts: selectNewProducts(state),
  isLoading: selectIsLoading(state)
})

const NewProductsSlider = connect(mapStateToProps, null)(({ newProducts, isLoading }) => (
  <>
    {isLoading ? <StyledSpinner size="large" tip="Loading..." /> : (
      <Container>
        <SliderTitle />
        <Carousel carouselSettings={carouselSettings} moveBottomDots="0px">
          {newProducts.map((el) => (
            <ItemWrapper key={el.itemNo}>
              <ProductCard
                key={el.itemNo}
                productInfo={el}
              />
            </ItemWrapper>
          ))}
        </Carousel>
      </Container>
    )}
  </>
))
export default NewProductsSlider
