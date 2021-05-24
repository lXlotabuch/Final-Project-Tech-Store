import styled from 'styled-components'
import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints'

const StyledOrderInfo = styled.div`
    padding: 50px 30px 100px;

    h2 {
        font-size: 16px;
        padding: 15px 0;
        font-weight: 600;
        line-height:2;
    }
    p {
        font-size: 14px;
        padding: 10px 0;
    }
    span {
        font-weight: 600;
        padding-left: 10px;
    }
    .italic {
        font-style: italic;
        padding-left: 0;
    }

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        h2 {
            font-size: 18px;
        }
        p {
            font-size: 14px;
        }
    }
    @media(min-width: ${forDesktop.minWidth}px){
        h2 {
            font-size: 20px;
        }
        p {
            font-size: 18px;
        }
    }
`
export default StyledOrderInfo