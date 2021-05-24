import styled, {css} from 'styled-components'
import {
  MenuOutlined, UserOutlined,
  SearchOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import {forTablet, forDesktop, forMobile} from '../../styles/mediaBreakPoints';

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  @media(min-width: ${forDesktop.minWidth}px) {
    padding-bottom: 2px;
  }
`;
export const ShaduleArrowContainer = styled.div`
    p {
      cursor: pointer;
    }
   @media(max-width: 430px) {
    p {
      text-align: center;
    }
    span {
      display: block;
      line-height: 15px;
    }
  } 
  position: relative;
  display: flex;
  align-items: center;
  @media(min-width: ${forTablet.minWidth}px) {
    flex: 3;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    flex: 0.4;
  }
`;
export const ShaduleContainer = styled.div`
    width: 100%;
    background-color: black;
`;
export const ContainerAlign = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;
    min-width: 320px;
    max-width: 1200px;
    position: relative;
    height: 40px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
  p{
    font-size: 11px;
    color: #8C8C8C;
    font-weight: bold;
    span{
      color: white;
    }
  }
  h3{
    display: inline-block;
    font-size: 11px;
    color: white;
    font-weight: bold;
    padding: 4px 0px;
    border-bottom: 1px solid white;
  } 
`;
export const ContactUsCall = styled.div`
  padding-left: 10px;
  @media(max-width: ${forMobile.maxWidth}px) {
    p{
      display: none;
    }
  }
  @media(min-width: ${forTablet.minWidth}px) {
    p{
      display: none;
    }
    flex: 2;
    display: flex;
    justify-content: flex-end;
    
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    p{
      display: block;
      padding-right: 10px;
    }
  }
`;
export const CallBackAsk = styled.div`
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex !important;
    flex-direction: row;
    h5{
      padding-right: 5px;
      color: white;
      font-size: 10px;
      padding-top: 5px;
    }
    div{
      padding: 0px 5px 0px 5px;
    }
  }
  @media(max-width: ${forMobile.maxWidth}px) {
    display: none;
  }
  @media(min-width: ${forTablet.minWidth}px) {
    display: none;
  }
`;
export const SearchAndItemsBlock = styled.div`
  width: 100%;
  padding: 0 10px;
  min-width: 320px;
  height: 64px;
  background-color: #0157fe;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media(min-width: ${forDesktop.minWidth}px) {
    background-color: white;
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;
  }
`;
export const FormContainer = styled.form`
  position: relative;
  flex: 8;
  @media(min-width: ${forTablet.minWidth}px) {
    flex: 12;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    flex: 100;
    padding-left: 50px;
    ${(props) => props.hideInput && css`
        display: none;
    `}
  }
`;
export const SearchInputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  padding-left: 10px;
  @media(min-width: ${forDesktop.minWidth}px) {
    background: #EBEBEB;
  }
`;
export const TechTag = styled.h1`
  position: absolute;
  top: 0px;
  left: 83px;
  z-index: 55;
  font-size: 20px;
  color: #0157fe;
  font-weight: 500;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  width: 90%;
  border-radius: 20px;
  flex: 30;
  @media(max-width: 370px) {
    ::placeholder,
    ::-webkit-input-placeholder {
    font-size: 10px;
  }
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    background: #EBEBEB;
  }
`;
export const CloseOutlinedFormStyled = styled(CloseOutlined)`
    display: none;
  @media(min-width: ${forDesktop.minWidth}px) {
    display: block;
    color: black;
    font-size: 22px;
    padding-left: 20px;
    padding-top: 2.5px;
  }
`;
export const RelativePosUserPopUp = styled.div`
  position: relative;
  z-index: 10;
  @media(min-width: ${forDesktop.minWidth}px) {
    flex: 1;
  }
  
`;
export const CircleDesktop = styled.div`
  position: relative;
  @media(min-width: ${forTablet.minWidth}px) {
   display: none;
   width: 0px;
   height: 0px;
  }
  @media(max-width: ${forMobile.maxWidth}px) {
   display: none;
   width: 0px;
   height: 0px;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
   display: block;
   position: relative;
   width: 30px;
   height: 30px;
   padding-right: 60px;
   padding-left: 20px;
  }
`;
export const LogoDesktop = styled.img`
  display: block; 
  @media(min-width: ${forDesktop.minWidth}px) {
    width: 30px;
    height: 34px;
    margin-left: auto; 
    margin-right: auto; 
    filter: invert(71%) sepia(14%) saturate(7210%) hue-rotate(553deg) brightness(102%) contrast(98%);
  }
`;

export const UserOutlinedStyled = styled(UserOutlined)`
  cursor: pointer;
  color: white;
  padding-right: 10px;
  font-size: 20px;
  flex: 1;
  @media(min-width: ${forDesktop.minWidth}px) {
    color: black;
    font-size: 20px;
  }
`;
export const CircleMobile = styled.div`
  position: relative;
  margin-top: 15px;
  width: 65px;
  height: 48px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background-color: #0156FF;
  z-index: 1;
  @media(min-width: ${forTablet.minWidth}px) {
    flex: 1;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;
export const MenuOutlinedStyled = styled(MenuOutlined)`
  color: white; 
  font-size: 20px;
  flex: 1;
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;
export const SearchOutlinedStyled = styled(SearchOutlined)`
  color: '#CCCCCC';
  flex: 1;
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;
export const SearchOutlinedStyledMedia = styled(SearchOutlinedStyled)`
  @media(max-width: ${forMobile.maxWidth}px) {
    display: none;
  }
  @media(min-width: ${forTablet.minWidth}px) {
    display: none;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    display: block;
    flex: 0.5;
    padding-left: 20px;
    font-size: 22px;
  }
`;
export const StrechedContainer = styled.div`
  background: white;
  width: 100%;
  border-bottom: 1px solid #CCCCCC;
`;