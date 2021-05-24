import styled from 'styled-components'
import { Empty } from 'antd'
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

export const WishlistBox = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    grid-gap: 15px;
    min-height: 135px;

    @media(min-width: 505px) and (max-width: ${forTablet.maxWidth}px) {
        grid-template-columns: repeat(auto-fit, minmax(200px ,1fr));
    }
    
    @media(min-width: ${forDesktop.minWidth}px){
        grid-template-columns: repeat(4, 1fr);
    }
`

export const StyledEmpty = styled(Empty)`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`