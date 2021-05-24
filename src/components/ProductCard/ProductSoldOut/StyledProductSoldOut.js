import { PhoneFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { forDesktop } from '../../../styles/mediaBreakPoints';

export const ProductSoldOutWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SoldOutIcon = styled(PhoneFilled)`
  padding: 3px;
  font-size: 4px;
  border-radius: 100%;
  color: #fff;
  background-color: #C94D3F;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 6px;
  }
`

export const SoldOutText = styled.div`
  margin-left: 5px;
  font-size: 10px;
  border: none;
  background-color: transparent;
  text-transform: lowercase;
  color: #C94D3F;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 12px;
  }
`