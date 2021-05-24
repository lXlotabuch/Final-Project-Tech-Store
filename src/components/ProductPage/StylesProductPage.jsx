import styled, { css } from 'styled-components'
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-bottom: 20px;
    @media(min-width: 721px){
        flex-direction: row;
    }
`
export const ProductImagesCarouselBox = styled.div`
    width: 100%;
    @media(min-width: 721px) and (max-width: ${forTablet.maxWidth}px){
        width: 55%;
    }
    @media(min-width: ${forDesktop.minWidth}px){
        width: 50%;
    }
`
export const InformationBox = styled.div`
    display: flex;
    align-self: stretch;
    flex-direction: column;
    width: 100%;
    
    @media(min-width: 721px) and (max-width: ${forTablet.maxWidth}px){
        width: 50%;
        padding: 12px 20px;
    }
    @media(min-width: ${forDesktop.minWidth}px){
        width: 60%;
        padding: 12px 20px;
    }
`
export const ImageBox = styled.div`
    height: 60vh;
`
export const StyledImg = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`
export const ProductHeading = styled.h3`
    margin-bottom: 7px;
    font-size: 22px;
    line-height: 33px;
    font-weight: 500;
`
export const AboutProduct = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: disc;
    margin-left: 14px;
    li {
        font-size: 15px;
        line-height: 20px;
        font-weight: 300;
        b {
            font-weight: 500;
        }
    }
`
export const PriceBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 15px 0;
`
export const PreviousPrice = styled.span`
    margin-bottom: 5px;
    font-size: 17px;
    color: #666666;
    text-decoration-line: line-through;

    span {
        font-size: 14px;
        margin-left: 5px;
    }
`
export const CurrentPrice = styled.span`
    font-weight: 700;
    font-size: 24px;
    
    ${(props) => props.promotionalProduct && css`
        color: #f84147;
  `}

    span {
        font-size: 17px;
        font-weight: 500;
        margin-left: 5px;
    }
`
export const FavoriteBox = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`
export const FavoriteText = styled.div`
    font-size: 14px;
    margin-left: 5px;
`