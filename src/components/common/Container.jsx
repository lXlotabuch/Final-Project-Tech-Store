import styled from 'styled-components'
import { forDesktop, forTablet } from '../../styles/mediaBreakPoints'

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 10px;
    min-width: 320px;
    
    @media(min-width: ${forTablet.minWidth}px) {
        padding: 0 30px;
    }

    @media(min-width: ${forDesktop.minWidth}px){
        max-width: 1200px;
    }
`

export const ContainerCart = styled(Container)`
    width: 100%;

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        padding: 0 30px;
    }
    
    @media(min-width: ${forDesktop.minWidth}px){
        max-width: 1200px;
        padding: 0 15px;
    }
`

export default Container;