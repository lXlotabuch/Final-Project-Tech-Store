import styled from 'styled-components';
import { forTablet } from '../../../styles/mediaBreakPoints';

export const SearchList = styled.div`
    position: absolute;
    background-color: #FFFFFF;
    z-index: 100000;
    width: 145%;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    @media (min-width: ${forTablet.minWidth}px){
        width: 90%;
        left: 5%;
    }
`

export const CloseList = styled.div`
    position: absolute;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translateX(-10px);
    & path{
        transition: all 0.3s linear;
    }
    &:hover{
        cursor: pointer;
        & path {
            fill: black;
        }
    }
`