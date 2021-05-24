import styled from 'styled-components'
import { forDesktop } from '../../../styles/mediaBreakPoints'

export const StyledLiked = styled.svg`
    margin-left: 7px;
    stroke: white;
    stroke-width: 1.2px;
    @media(min-width: ${forDesktop.minWidth}px) {
      margin-left: 18px;
      stroke: black;
    }
`;
export const Circle = styled.div`
    position: absolute;
    top: -4px;
    left: 23px;
    width: 17px;
    height: 17px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(min-width: ${forDesktop.minWidth}px) {
      left: 35px;
      top: -5px;
      background-color: #0157fe;
    }
`;
export const Amount = styled.p`
    color: black;
    font-weight: 600;
    font-size: 10px;
    height: 50%;
    @media(min-width: ${forDesktop.minWidth}px) {
      color: white;
    }
`;
