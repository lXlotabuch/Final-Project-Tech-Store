import styled from 'styled-components';
import { CheckCircleFilled } from '@ant-design/icons';
import { forDesktop } from '../../../styles/mediaBreakPoints';

const StyledInStockeWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const StyledInStockeIcon = styled(CheckCircleFilled)`
  color: #78A962;
  font-size: 10px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 12px;
  }
`

export const StyledInStockeText = styled.span`
  font-size: 10px;
  margin-left: 5px;
  text-transform: lowercase;
  color: #78A962;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 12px;
  }
`

export default StyledInStockeWrapper;