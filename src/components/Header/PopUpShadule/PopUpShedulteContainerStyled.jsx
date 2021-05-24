import styled from 'styled-components';
import {
  FieldTimeOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { forTablet } from '../../../styles/mediaBreakPoints';

export const PopUpBlock = styled(motion.div)`
    position: absolute;
    top: 0%;
    height: 250px;
    width: 320px;
    left: 0px;
    margin: 0 auto;
    transform: translateX(-50%);
    background-color: white;
    z-index: 56;
    border-radius: 5px;
    box-shadow: 0 0px 1px rgba(0,0,0,0.12), 
              0 0px 2px rgba(0,0,0,0.12), 
              0 0px 4px rgba(0,0,0,0.12), 
              0 0px 8px rgba(0,0,0,0.12);
    @media(min-width: ${forTablet.minWidth}px) {
      width: 350px;
    }
`;
export const FieldTimeOutlinedStyled = styled(FieldTimeOutlined)`
  font-size: 30px;
  
`;
export const TimeContainer = styled.div`
  position: relative;
  height: 100px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const CloseShedule = styled.div`
  position: absolute;
  top: 3px;
  right: -30px;
  cursor: pointer;
`;
export const PositionTimeIcon = styled.div`
  height: 65px;
  display: flex;
  align-items: flex-start;
`;
export const SmoothLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  opacity: 0.5;
  background-color: #000000;
`;
export const ListsTime = styled.ul`
  li{
    padding: 3px;
    font-size: 16px;
    font-weight: bold;
    h5{
      &:first-child span{
        display: inline-block;
        font-size: 15px; 
        color: #8C8C8C;
      }
      &:first-child small{
        display: inline-block;
        font-size: 13px;
        color: #000000;
        font-weight: normal;
      }
    }
  }
`;
export const AdressContainer = styled.div`
  height: 75px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const PositionAdressIcon = styled.div`
  height: 25px;
  
  display: flex;
  align-items: flex-start;
`;
export const EnvironmentOutlinedStyled = styled(EnvironmentOutlined)`
  font-size: 30px;
`;
export const ContactsContainer = styled.div`
  height: 75px;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const BlackEP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h6{
    padding: 5px;
    a{
      display: inline-block;
      color: #2596be;
      outline: none;
    }
  }
`;