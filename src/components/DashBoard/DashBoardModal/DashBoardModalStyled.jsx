import { Modal as AntModal } from 'antd';
import styled from 'styled-components';

const StyledAntModal = styled(AntModal)`
  .ant-modal-body{
    padding-bottom: 0px !important;
  }
  .ant-btn {
    border-radius: 15px;
  }
  .ant-btn-primary {
    background-color: #0156FF;
    color: #fff;
    border: 1px solid #0156FF;
    border-radius: 15px;
    &:hover{
      color: #3faaff;
      border: 1px solid #3faaff;
      background: white;
    }
    &:disabled {
    cursor: default;
  }
  }
`;
export default StyledAntModal;