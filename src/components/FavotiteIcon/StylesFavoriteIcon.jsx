import styled, { css } from 'styled-components'
import { forDesktop } from '../../styles/mediaBreakPoints'

export const IconWrapper = styled.div`
    position: relative;
    cursor: pointer;
    & svg {
        stroke: #f7749e;
    }
    ${(props) => props.isFavorite && css`
        & svg {
         fill: #eb2d69 !important;
         stroke: #eb2d69 !important;
        }
    `}
    &:hover svg  {
        fill: #f7749e;
        stroke: #f7749e;
    }

    @media(min-width: ${forDesktop.minWidth}px) {
        ${(props) => props.showTooltip && css`
            &:hover::after {
            content: 'Add to favorite!';
            position: absolute;
            top: 25px;
            right: -100px;
            padding: 2px 4px;
            font-size: 12px;
            border: 0.5px solid black;
            border-radius: 3px;
            background-color: white;
            z-index: 2;
            ${props.isFavorite && css`
                content: 'Unlike'; 
                right: -40px;
            `}
        `}
} 
`
export default IconWrapper
