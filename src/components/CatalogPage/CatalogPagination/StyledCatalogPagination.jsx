import { Pagination } from 'antd'
import styled from 'styled-components'

export const StyledPagination = styled(Pagination)`
margin: 20px auto;
& .ant-pagination-item,
.ant-pagination-item-link{
  border-radius: 50%;
}
& .ant-pagination-item-active{
  font-weight: 600;
}
`

export default StyledPagination