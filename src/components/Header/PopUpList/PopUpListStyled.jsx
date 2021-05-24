import {
  RightOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { forDesktop, forMobile } from '../../../styles/mediaBreakPoints';

export const PopUpContainer = styled(motion.div)`
  ${(props) => !props.isOpen && css`
    display: none;
  `}
  ${(props) => props.isOpen && css`
    display: block;
  `}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 52;
  border-bottom: 0.1px solid rgba(0,0,0,0.2);
  @media(min-width: ${forDesktop.minWidth}px) {
    border-bottom: none;
  }
  @media(max-width: ${forMobile.maxWidth}px) {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
   ul{
    display: flex;
    width: 100%;
    flex-direction: column;
    @media(min-width: ${forDesktop.minWidth}px) {
      width: 90%;
      height: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

  }
    h5{
        font-size: 20px;
        color: black;
        @media(min-width: ${forDesktop.minWidth}px) {
          font-size: 14px;
          font-weight: 600;
        }
      }
    li{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 25px 20px 20px 25px;
      @media(min-width: ${forDesktop.minWidth}px) {
        padding: 0px 5px 0px 5px;
      }
    }
  }
   @media(min-width: ${forDesktop.minWidth}px) {
      position: static;
      width: 100%;
      ${(props) => !props.isOpen && css`
        clip-path: circle(2200px at 40px 40px) !important;
      `}
      ${(props) => props.isOpen && css`
        clip-path: circle(2200px at 40px 40px) !important;
      `}
      ${(props) => !props.hideInput && css`
        display: none;
      `}
      ${(props) => props.hideInput && css`
        display: block;
      `}
  }
  
`;
export const ExceptionLi = styled.li`
  @media(min-width: ${forDesktop.minWidth}px) {
    padding-left: 65px !important;
  }
`;
export const TechTag = styled.h1`
  position: absolute;
  top: 30px;
  left: 66px;
  font-size: 25px;
  color: #0157fe;
  font-weight: 500;
`;
export const HeaderOfPopUp = styled.div`
  //position: relative;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;
export const Line = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  display: inline-block;
  height: 1px;
  width: 90%; 
  background: #A9A9A9;
  transform: translateX(-50%);
`;
export const RightOutlinedStyled = styled(RightOutlined)`
    color: black;
    font-weight: bold;
    font-size: 15px;
    padding-right: 5px;
    @media(min-width: ${forDesktop.minWidth}px) {
      display: none;
    }
`;
export const CloseOutlinedStyled = styled(CloseOutlined)`
    color: black;
    font-size: 20px;
    padding-right: 25px;
`;
export const Listnavigation = styled.ul`
  color: black !important;
  a{
    outline: none;
  }
`;
export const LinkStyled = styled(Link)`
  outline: none;
  color: #0157fe;
  &:hover {
    color: #0157fe;
  }
`;