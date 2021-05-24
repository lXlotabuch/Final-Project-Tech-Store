import styled from 'styled-components';
import { Button, Input} from 'antd'
import 'antd/dist/antd.css';
import {forDesktop} from '../../../styles/mediaBreakPoints';

export const StyledCartItem = styled.div`
    border-bottom: 1px solid #cccccc;
    padding-bottom: 17px;
    margin-bottom: 17px;
    
    img {
        width: 90%;
        height: 90%;
        display: block;
        padding-bottom: 15px;
    }
    p {
        width: 90%;
        font-size: 14px;
        line-height: 18px;
        padding-bottom: 15px;
        color: #000000;
    }
    .price, .subtotal  {
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #000000;
    }
    .subtotal {
        text-align: end;
    }
    .bold {
        font-weight: 600;
    }
    @media(min-width: ${forDesktop.minWidth}px){
        padding-bottom: 25px;
        margin-bottom: 25px;
        img {
            padding-bottom: 0;
        }
        p {
            font-size: 14px;
            line-height: 21px;
            padding-bottom: 0;
        }
        .price, .subtotal {
            font-size: 16px;
            line-height: 24px;
        }
        .subtotal {
            text-align: end;
        }
    }
`;

export const ButtonRemoveEdit = styled(Button)`
    margin: 3px 6px;
`;

export const StyledInput = styled(Input)`
    display: block;
    background-color: #EBEBEB;
    border-radius: 6px;
    min-width: 50px;
    width: 50px;
    height: 40%;
    margin: 0 5px;

    @media(min-width: ${forDesktop.minWidth}px){
        display: block;
        width: 112px;
        height: 40%;
    }
`;

export default StyledCartItem;
