import styled from 'styled-components'
import { forDesktop, forTablet } from '../../styles/mediaBreakPoints'

export const LogInWrapper = styled.div`
  @media (min-width: ${forTablet.minWidth}px){
    &{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 40px;
    }
  }

  @media (min-width: ${forDesktop.minWidth}px){
    &{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: stretch;
    }
  }
`

export default LogInWrapper