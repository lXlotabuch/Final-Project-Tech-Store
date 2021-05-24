import styled from 'styled-components'
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

export const Img = styled.img`
  width: 100%;
  height: 100%;
`
export const ImageBox = styled.div`
  height: 100px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    height: 173px;
  }
  @media(min-width: ${forDesktop.minWidth}px){
    height: 250px;
  }
`