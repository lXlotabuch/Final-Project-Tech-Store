import styled from 'styled-components';
import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints';

const Heading = styled.h3`
color: #000;
font-weight: 600;
font-size: 18px;
line-height: 27px;
margin: 20px 0;

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    font-size: 26px;
    line-height: 27px;
    margin: 30px 0;
  }
  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 32px;
    line-height: 48px;
    margin: 30px 0 30px 40px;
  }
  `;

export default Heading;