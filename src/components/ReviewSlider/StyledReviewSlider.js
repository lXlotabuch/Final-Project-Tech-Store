import styled from 'styled-components'
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

export const RoundDots = styled.div`
  position: relative;
  top: -10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #CCCCCC;
  cursor: pointer;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    top: -35px;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
   width: 15px;
   height: 15px;
   top: -35px;
  }
`;

export const ReviewWrapper = styled.div`
  width: 280px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 71vw;
  };
  @media(min-width: ${forDesktop.minWidth}px) and (max-width: 1500px){
    width: 63vw;
  };
  @media(min-width: 1501px) {
    width: 922px;
  };
`;

export const ReviewTextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  width: 280px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 71vw;
  };
  @media(min-width: ${forDesktop.minWidth}px) and (max-width: 1500px){
    width: 63vw;
  };
  @media(min-width: 1501px) {
    width: 922px;
  };
`;

export const ReviewIcon = styled.img`
  display: block;
  height: 15px;
  width: 31px;
  margin-right: 15px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    margin-right: 17px;
  };
  @media(min-width: ${forDesktop.minWidth}px) {
    margin-right: 25px;
    height: 22px;
  }
`;

export const ReviewText = styled.p`
  display: block;
  width: 345px;
  font-size: 12px;
  line-height: 18px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 622px;
    font-size: 14px;
    line-height: 19px;
  };
  @media(min-width: ${forDesktop.minWidth}px) {
    width: 850px;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const ReviewAuthor = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  font-size: 10px;
  line-height: 15px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    font-size: 10px;
    margin-top: 5px;
  };
  @media(min-width: ${forDesktop.minWidth}px) {
    margin-top: 10px;
    font-size: 14px;
    line-height: 21px;  
  }
`;

export const contentStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '300px',
  color: '#000000',
  textAlign: 'left',
  background: '#F5F9FF',
};

export default ReviewWrapper;