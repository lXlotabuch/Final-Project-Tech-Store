import styled from 'styled-components';
import { forTablet, forDesktop } from '../../../styles/mediaBreakPoints';

const StyledCartList = styled.div`
    margin-bottom:30px;

    div.margin {
        margin-bottom: 15px;
    }

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        width: 100%;
        }
    
    @media(min-width: ${forDesktop.minWidth}px){
        width: 100%;
    }
`;
export default StyledCartList;