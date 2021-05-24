import styled from 'styled-components';
import { forTablet, forDesktop } from '../../../styles/mediaBreakPoints';

const StyledSummary = styled.div`
    margin: 20px 0 20px 0;
    background-color: #F5F9FF;
    padding: 20px 25px;
    flex: 0 2 343px;

    h4 {
        font-weight: 600;
        font-size: 20px;
        line-height: 21px;
        margin-bottom: 30px;
    }
    .sumtotal {
        font-weight: 600;
        font-size: 14px;
        line-height: 170%;
    }
    div {
        margin: 10px 0;
    }

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        margin: 20px 0 0 25px;
        padding: 20px 25px;
        min-width: 343px;
    
        h4 {
            font-size: 20px;
            line-height: 21px;
        }
        .sumtotal {
            font-size: 14px;
        }

        @media(min-width: 481px) and (max-width: 767px) {
            margin: 20px 0 30px 0;
        }
    }

    @media(min-width: ${forDesktop.minWidth}px){
        margin: 0 0 0 35px;
        padding: 20px 25px;
        min-width: 343px;

        h4 {
            font-size: 24px;
            line-height: 36px;
        }
        p, span {
            font-size: 14px;
        }
    }
`;

export default StyledSummary;