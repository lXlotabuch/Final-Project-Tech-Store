import styled from 'styled-components';
import {forDesktop, forTablet} from '../../styles/mediaBreakPoints';

export const DisplayRow = styled.div`
    display:flex;
`;

export const AlignItemsCenter = styled(DisplayRow)`
    align-items:center;

    @media(min-width: ${forDesktop.minWidth}px){
        align-items: flex-start;
    }
`;

export const RowRevers = styled(DisplayRow)`
    display: block;
    margin-bottom:30px;

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        display:flex;
        flex-direction: row-reverse;
        margin-bottom:30px;

        @media(min-width: 481px) and (max-width: 767px) {
            display: block;
        }
    }
    @media(min-width: ${forDesktop.minWidth}px){
        display:flex;
        flex-direction: row-reverse;
        margin-bottom:70px;
    }
`;

export const RowColumn = styled(DisplayRow)`
    flex-direction: column;

    @media(min-width: ${forDesktop.minWidth}px){
        flex-direction: row;
    }
`;

export const RowBetween = styled(DisplayRow)`
    justify-content: space-between;
`;

export const ColumnRowBetween = styled(DisplayRow)`
    padding-top: 30px;
    flex-direction: column;

    @media(min-width: ${forDesktop.minWidth}px){
        flex-direction:row;
        justify-content: space-between;
    }
`;

export const WrapperButton = styled.div`
    margin: 0 0 20px 20px;
    display: block;

    @media(min-width: ${forDesktop.minWidth}px){
        margin: 35px 0 0 25px;
    }
`