import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '../common/Container'
import Subscribe from './Subscribed/Subscribe';
import {
  AccountInfo, MyDash, WrapperBlocks, RowBlocks,
} from './StyledDashBoard';
import PasswordInfoChange from './PasswordInfoChange/PasswordInfoChange';
import StyledSpinner from '../StyledSpinner/StyledSpinner'
import Orders from './Orders/Orders';
import { selectCustomerInfo, selectIsLoading } from '../../store/customer/reducer'

const mapStateToProps = (state) => ({
  customerInfo: selectCustomerInfo(state),
  isLoading: selectIsLoading(state)
})

const DashBoard = connect(mapStateToProps, null)(({
  customerInfo,
  isLoading
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  if (isLoading) return <StyledSpinner size="large" tip="Loading..." />
  return (
    <Container>
      <MyDash>
        <p>My Dashboard</p>
      </MyDash>
      <AccountInfo>
        <h3>Account Information</h3>
      </AccountInfo>
      <WrapperBlocks>
        <RowBlocks>
          <PasswordInfoChange info={customerInfo} />
        </RowBlocks>
        <RowBlocks>
          <Subscribe
            email={customerInfo.email}
          />
        </RowBlocks>
        <RowBlocks>
          <Orders />
        </RowBlocks>
      </WrapperBlocks>
    </Container>
  );
})
export default DashBoard;
