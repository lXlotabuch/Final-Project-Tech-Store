import styled, { css } from 'styled-components'
import { Carousel } from 'antd'

export const StyledCarousel = styled(Carousel)`
    
    & ul .slick-dots {
        height: 12px;
    }

    & .slick-dots li {
        width: 12px;
        height: 12px;
        background-color: #cccccc;
        border-radius: 50%;
    }
    & .slick-dots li button {
        width: 12px;
        height: 12px;
        background-color: #cccccc;
        border-radius: 50%;
    }
    & .slick-dots li.slick-active {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #0156FF;
    }
    & .slick-dots li.slick-active button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #0156FF;
    }

    ${(props) => props.moveBottomDots && css`
        & .slick-dots.slick-dots-bottom {
            bottom: ${props.moveBottomDots};
        }
    `}
`
export default StyledCarousel