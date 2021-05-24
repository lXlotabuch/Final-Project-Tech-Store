import { ShoppingCartOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import {forDesktop} from '../../../styles/mediaBreakPoints';

export const CartWrapper = styled.div`
    position: relative;
    text-align: center;
`
export const ShoppingCartOutlinedStyled = styled(ShoppingCartOutlined)`
    filter: brightness(0) invert(1);
    font-size: 25px;
    flex: 1;
    padding: 0 20px;
    @media(min-width: ${forDesktop.minWidth}px) {
      filter: invert(37%) sepia(0%) saturate(0%) hue-rotate(559deg) brightness(52%) contrast(106%);
      flex: 3;
      padding: 0px 10px 0px 10px;
    }
`
export const StyledCount = styled.div`
    background-color: white;
    position: absolute;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    right: 10px;
    top: -4px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(min-width: ${forDesktop.minWidth}px) {
        background-color: #0157fe;
        right: 0;  
        top: -5px;
    }
`
export const Amount = styled.p`
    color: black;
    font-weight: 600;
    font-size: 10px;
    height: 50%;
    @media(min-width: ${forDesktop.minWidth}px) {
      color: white;
    }
`;
export default StyledCount