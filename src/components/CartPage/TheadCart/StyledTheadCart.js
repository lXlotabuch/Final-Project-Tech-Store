import styled from 'styled-components';
import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints';

const StyledThead = styled.div`
    display: none;
    
    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        display: none;
    }

    @media(min-width: ${forDesktop.minWidth}px){
        display: block;
        border-bottom: 1px solid #cccccc;
        padding: 10px 0;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
        width: 100%;
        margin-bottom: 25px;

        .subtotal {
            text-align: end;
        }
        .qty {
           text-align:center;
        }
    }
`;

export default StyledThead;