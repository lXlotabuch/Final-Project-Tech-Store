import styled from 'styled-components'
import { forTablet, forDesktop, forMobile } from '../../styles/mediaBreakPoints';

export const AccountInfo = styled.div`
  @media(max-width: ${forMobile.maxWidth}px) {
      width: 90%;
    }
  @media(min-width: ${forTablet.minWidth}px) {
     width: 70%;
     margin: 0 auto;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
     width: 50%;
     margin: 0 auto;
  }
  h3{
    border-bottom: 1px solid #CCCCCC;
    padding: 0px 0px 10px 0px;
    @media(max-width: ${forMobile.maxWidth}px) {
      text-align: left;
    }
    @media(min-width: ${forTablet.minWidth}px) {
      color: #212121;
      font-size: 14px;
      text-align: center;
    }
  }
`;
export const MyDash = styled.aside`
  padding-top: 20px;
  padding-bottom: 15px;
  @media(min-width: ${forDesktop.minWidth}px) {
    padding-bottom: 2px;
  }
  p{ 
    font-size: 18px;
    font-weight: bold;
    @media(min-width: ${forDesktop.minWidth}px) {
    font-size: 25px;
  }
  }
`;
export const WrapperBlocks = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 600px) {
    align-items: center;
    padding-bottom: 2px;
    border-top: 0px solid #CCCC;
  }
  button {
    border: none;
    background-color: transparent;
    color: #0156FF;
    text-decoration-line: underline;
    font-style: normal;
    font-weight: 300;
    margin-top: 10px;
  }
`;
export const RowBlocks = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BlockInfo = styled.div`
  padding: 20px 20px 20px 0px;

  @media(min-width: ${forTablet.minWidth}px) {
      padding: 20px 20px 20px 20px;
  }
  h4{
    font-weight: bold;
    padding-bottom: 15px;
    text-align: center;
  }
`;
export const TextInfo = styled.div`
  p{
    padding: 5px;
  }
`;