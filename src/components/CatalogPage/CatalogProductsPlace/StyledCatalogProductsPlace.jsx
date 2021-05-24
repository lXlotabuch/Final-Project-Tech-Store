import styled from 'styled-components'
import { forTablet } from '../../../styles/mediaBreakPoints'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  text-align: center;
  padding: 10px;
 `
export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  justify-items: center;
  
  @media (min-width: ${forTablet.minWidth}px){
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  }
`