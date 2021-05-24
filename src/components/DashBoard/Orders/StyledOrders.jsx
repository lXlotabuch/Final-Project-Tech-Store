import styled from 'styled-components';

const OrderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    flex-grow: 1;
    flex-basis: 505px;
    padding: 0px 10px 0px 10px;
    @media(max-width: 1250px) {
      padding: 15px;
    }
  }
`;
export default OrderWrapper;