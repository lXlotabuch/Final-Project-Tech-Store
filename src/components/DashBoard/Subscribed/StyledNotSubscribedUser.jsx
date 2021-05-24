import styled from 'styled-components'
import { forTablet, forMobile } from '../../../styles/mediaBreakPoints';

const StyledSubscribedBlock = styled.div`
    @media(max-width: ${forMobile.maxWidth}px) {
        text-align: left;
    }
    @media(min-width: ${forTablet.minWidth}px) {
        text-align: center;
    }
`;
export default StyledSubscribedBlock;