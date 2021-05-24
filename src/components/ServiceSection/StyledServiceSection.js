import styled from 'styled-components'
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

export const ServiceContainer = styled.div`
    background: #F5F9FF;
    margin-top: 20px;

    @media(min-width: ${forDesktop.minWidth}px) {
        margin-top: 60px;
    }
`

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 25px 0 25px;

    @media(min-width: ${forTablet.minWidth}px) and (max-width: 744px) {
        flex-direction: column;
    };
    @media(min-width: 745px) and (max-width: ${forTablet.maxWidth}px) {
        flex-direction: row;
    };
    @media(min-width: ${forDesktop.minWidth}px) {
        flex-direction: row;
        padding: 60px 0 45px;
    }
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 212px;
    height: 125px;

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        width: 212px;
        height: 125px;
    };

    @media(min-width: ${forDesktop.minWidth}px) {
        width: 256px;
        height: 168px;
    }
`;

export const Round = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #0156FF;

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        width: 45px;
        height: 45px;
        margin-bottom: 7px;
    };
    @media(min-width: ${forDesktop.minWidth}px) {
        width: 65px;
        height: 65px;
    }
`;

export const Img = styled.img`
    width: 18px;
    height: 18px;

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        width: 18px;
        height: 18px;
    };
    @media(min-width: ${forDesktop.minWidth}px) {
        width: 25px;
        height: 25px;
    }
`;

export const Service = styled.div`
    font-weight: 700;
    font-size: 14px;

    @media(min-width: ${forDesktop.minWidth}px) {
        font-size: 18px;
    }
`;

export const Description = styled.div`
    text-align: center;
    font-size: 11.5px;
    font-weight: 400;
    line-height: 16px;
    padding-bottom: 10px;

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        font-size: 11.5px;
        line-height: 16px;
    };
    @media(min-width: ${forDesktop.minWidth}px) {
        font-size: 14px;
        line-height: 19px;
    }
`;

export default Item