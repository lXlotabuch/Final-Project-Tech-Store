import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { forDesktop } from '../../../styles/mediaBreakPoints'

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 37px 0 17px 0;
`
export const Title = styled.h3`
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;

    @media(min-width: ${forDesktop.minWidth}px) {
        font-size: 22px;
        line-height: 33px;
    }
`
export const StyledAllProductsLink = styled(Link)`
    font-size: 10px;
    font-weight: 400;
    line-height: 11.5px;
    color: black;
    text-decoration: underline;
    outline: none;

    &:hover {
        color: black;
    }

    @media(min-width: ${forDesktop.minWidth}px) {
        font-size: 13px;
        line-height: 15px;
    }
`