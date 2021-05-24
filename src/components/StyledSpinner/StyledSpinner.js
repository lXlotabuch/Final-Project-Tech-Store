import styled, { css } from 'styled-components'
import { Spin } from 'antd'

const StyledSpinner = styled(Spin)`
    margin: 50px auto;
    width: 100%;

    ${(props) => typeof props.margin === 'string' && css`
        margin: ${props.margin};
    `}
`
export default StyledSpinner