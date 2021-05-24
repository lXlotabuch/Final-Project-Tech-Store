import styled from 'styled-components';
import {
  Menu
} from 'antd';

import { forTablet } from '../../../styles/mediaBreakPoints'

export const ContainerOrder = styled.div`
  padding-top: 0px !important;
  border-top: 1px solid rgba(0,0,0,0.1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px;
  .ant-descriptions-item-label {
    padding: 0px 13px 0px 13px !important;
  }
  .ant-descriptions-bordered .ant-descriptions-item-label {
    background-color: #ccccff;
  }
`;
export const ShowListStyled = styled.span`
  text-decoration-line: underline;
  color: #0156FF;
  cursor: pointer;
  .ant-btn {
    margin-top: 0px;
    background-color: #0854fc;
    color: white;
    border-radius: 15px;
    transition: all 0.3s ease;
    font-weight: 400;
    &:hover {
      background: transparent;
      border: 1px solid #3eabff;
      color: #3eabff;
      font-weight: 400;
    }
  }
`;
export const StyledMenu = styled(Menu)`
    width: 90%;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    padding: 0px;
  .ant-dropdown-menu {
    width: 90% !important;
    &::first-child{
      background-color: red !important;
    }
  }
  .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title {
    white-space: pre-wrap;
    position: relative;
  }
  @media(max-width: ${forTablet.minWidth}px) {

  }
  @media(max-width: 800px) {
    .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title {
     font-size: 12px;
     padding: 5px !important;
   }
  }
`;
export const ImgContainer = styled.div`
  padding: 2px;
  position: absolute;
  top: 0px;
  width: 60px;
  height: 100%;
  left: -60px;
  background-color: white;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

export const ImgDash = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 7px;
`;