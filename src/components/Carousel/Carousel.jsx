/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { StyledCarousel } from './StyledCarousel'
import { Wrapper } from '../common/Wrapper'
import { SliderArrowLeft } from '../common/SliderArrowLeft'
import { SliderArrowRight } from '../common/SliderArrowRight'

const Carousel = ({
  carouselSettings, children, hideArrows, moveBottomDots
}) => {
  const ref = useRef()
  const [handlers, setHandlers] = useState({ next: () => null, prev: () => null })

  useEffect(() => {
    if (ref.current) {
      setHandlers(() => ({ next: ref.current.next, prev: ref.current.prev }))
    }
    // при первом рендере ref.current === undefined потому используется useEffect & useState
  }, [])
  
  return (
    <Wrapper>
      <StyledCarousel ref={ref} {...carouselSettings} moveBottomDots={moveBottomDots}>
        {children}
      </StyledCarousel>
      {!hideArrows && children.length > 1 && <SliderArrowRight onClick={handlers.next} /> }
      {!hideArrows && children.length > 1 && <SliderArrowLeft onClick={handlers.prev} /> }
    </Wrapper>
  )
}
  
Carousel.propTypes = {
  carouselSettings: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.instanceOf(Array).isRequired,
  hideArrows: PropTypes.bool,
  moveBottomDots: PropTypes.string
}
Carousel.defaultProps = {
  hideArrows: false,
  moveBottomDots: ''
}

export default Carousel