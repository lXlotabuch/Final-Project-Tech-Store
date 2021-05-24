import styled from 'styled-components'
import { forDesktop } from '../../styles/mediaBreakPoints'

export const SliderArrowTeamplate = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 48px;
  border: none;
  background-color: rgba(37, 41, 49, 0.5);
  transition: 0.2s;

  &:hover {
    background-color: rgba(37, 41, 49, 1);
  }

  @media(min-width: ${forDesktop.minWidth}px) {
    display: block;
    
  }
`
export default SliderArrowTeamplate