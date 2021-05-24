import { Radio } from 'antd';
import styled from 'styled-components'
import { forTablet } from '../../styles/mediaBreakPoints';

export const StyledShippingTitle = styled.p`
    color: #000000;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    border-bottom: 1px solid #cccccc;
    padding: 0 0 15px;
    margin-bottom: 25px;
`
export const WrapperFormCheckout = styled.div`
    width: 100%;

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        min-width: 50%;

        @media(min-width: 481px) and (max-width: 767px) {
            width: 100%;
        }
    }
`
export const StyledRadio = styled(Radio)`
    display: block;
    height: 40px;
    line-height: 40px;
`

export default StyledShippingTitle;