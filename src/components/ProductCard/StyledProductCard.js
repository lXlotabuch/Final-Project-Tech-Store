import styled, { css } from 'styled-components';
import { forDesktop, forTablet } from '../../styles/mediaBreakPoints'

export const CardItem = styled.div` 
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 235px;
  padding: 5px 8px;

  &:hover {
    box-shadow: 0 1px 16px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);

  }

  @media(min-width: ${forTablet.minWidth}px) {
    padding: 10px 15px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
`

export const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

export const ReviewsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 9px 0;
`
export const RatingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(min-width: ${forDesktop.minWidth}px){
    flex-direction: row;
    align-items: center;
  }
`

export const CardReviews = styled.span`
  color: #8C8C8C;
  font-size: 12px;
  margin-top: 4px;

  @media(min-width: ${forDesktop.minWidth}px){
    margin-left: 5px;
    margin-top: 0;
  }
`

export const CardTitle = styled.h3`
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  text-align: left;

  height: 35px;
  overflow: hidden;

  margin: 10px 0;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 13px;
    line-height: 19.5px;
    height: 40px;
  }
`

export const PurchaseGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`
export const PriceBox = styled.div`
  display: flex;
  margin-bottom: 5px;
`

export const CardLastPrice = styled.div`
  font-size: 14px;
  text-decoration-line: line-through;
  color: #666666;
  margin: auto 5px auto 0;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 16px;
  }
`

export const CardCurrentPrice = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: black;
  padding: 2px;
  ${(props) => props.promotionalProduct && css`
    color: #f84147;
  `}

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 18px;
  }
`
