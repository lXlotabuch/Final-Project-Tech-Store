import styled, { css } from 'styled-components';
import { forTablet } from '../../../../styles/mediaBreakPoints';

export const ProductWrapper = styled.div`
    display: flex;
    padding: 10px;
    height: 100px;
    &:hover{
        box-shadow: 0 0 10px rgba(0,0,0,0.1)
    }
`

export const ProductImg = styled.div`
    min-width: 80px;
    width: 20%;
    padding: 10px;
    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const ProductInfo = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: space-between;
    padding: 10px 0;
    @media (min-width: ${forTablet.minWidth}px) {
        width: 60%;
    }
`

export const ProductDescription = styled.div`
    font-size: 8px;
    @media(max-width: 700px){
        display: none;
    }
`

export const PriceWrapper = styled.div`
    display: none;
    @media (min-width: ${forTablet.minWidth}px) {
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
`

export const ProductFullPrice = styled.div`
    color: #666666;
    text-decoration-line: line-through;
    font-size: 12px;
`

export const ProductCurrentPrice = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    ${({discount}) => discount && css`
        color: red;
    `}
`