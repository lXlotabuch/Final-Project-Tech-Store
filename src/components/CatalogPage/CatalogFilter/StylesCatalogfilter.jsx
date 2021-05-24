import styled, {css, createGlobalStyle} from 'styled-components';
import {
  Form,
  Checkbox
} from 'antd';
import { forDesktop} from '../../../styles/mediaBreakPoints';

export const GlobalStyle = createGlobalStyle`
  body {
    ${({showFilter}) => showFilter && css`overflow: hidden`}
  }
`

export const StyledForm = styled(Form)`
  background: #F5F7FF;
  @media(max-width: 592px) {
    z-index: 200;
  } 
  @media(min-width: 592px) {
    min-width: 250px;
    width: 27%;
  } 
  @media(min-width: ${forDesktop.minWidth}px) {
    min-width: 250px;
    width: 20%;
  } 
`;

export const Wrapper = styled.aside`
    @media(max-width: 592px) {
      position: fixed;
      top: 0%;
      left: -100%;
      width: 100%;
      height: 100%;
      padding-bottom: 76px;
      overflow: scroll;
      background: #ECECEC;
      transition: all 0.5s ease-out;
      opacity: 0;
      z-index: 60;
      ${(props) => (props.showFilter && css`
        left: 0%;
        opacity: 1;
      `)}
  }
`;

export const FilterTitle = styled.div`
  @media(max-width: 592px) {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 35px;
    background: #ECECEC;
      h3{
      font-size: 20px;
      font-weight: bold;
    }
  }
  @media(min-width: 592px) {
    padding: 15px 20px;
    justify-content: center;
    width: 100%;
    h3{
      font-size: 21px;
      font-weight: bold;
      text-align: center;
    }
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  width: 100% !important;
  padding: 10px;
  margin-left: 0 !important;
  &.ant-checkbox-wrapper-checked{
    background-color: #edf3ff;
  }
`

export const CloseBtn = styled.div`
  @media(max-width: 592px) {
    cursor: pointer;
  }
  @media(min-width: 592px) {
    display: none;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;

export const AlignBtn = styled.div`
  padding: 10px;
  @media(max-width: 592px) {
    background: #cbccd4;
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100
  }
  @media(min-width: 592px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
export const AllBrandsTitle = styled.div`
  @media(max-width: 592px) {
    display: none;
  }
  @media(min-width: 592px) {
    border-top: 7px solid white;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h5{
      font-size: 20px;
    }
  }
  
`;
export const GridFilterPart = styled.div`
  @media(max-width: 592px) {
    display: none;
  }
  @media(min-width: 592px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }
`;
export const ContainerBrandsImg = styled.div`
  text-align: center;
  display: block;
`;
export const ContainerImage = styled.div`
  @media(max-width: 592px) {
    display: none;
  }
  @media(min-width: 592px) {
    text-align: center;
    display: block;
    img{
      width: 100%;
    }
  }
`;