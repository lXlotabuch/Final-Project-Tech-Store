import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { selectIsLogin } from '../../store/auth/reducer';
import { RowColumn, WrapperButton } from '../CartPage/Flex';
import StyledButton from '../common/Buttons/StyledButton';
import { ContainerCart } from '../common/Container';
import Heading from '../common/Heading/Heading';
import OrderInfo from './OrderInfo/OrderInfo';

export const OrderPageComponent = ({isLogin}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const history = useHistory()

  const onClickHome = () => {
    history.push('/')
  }
  const onClickDashboard = () => {
    history.push('/dashboard')
  }
  return (
    <ContainerCart>
      <RowColumn>
        <Heading>Order</Heading>
        <WrapperButton>
          <StyledButton
            onClick={onClickHome}
            size="lg"
            shape="round"
            color="borderBlue"
          >
            Back to Homepage
          </StyledButton>
        </WrapperButton>
        
        {isLogin
          ? (
            <WrapperButton>
              <Link to="/dashboard">
                <StyledButton
                  onClick={onClickDashboard}
                  size="lg"
                  shape="round"
                  color="borderGrey"
                >
                  Go to Dashboard
                </StyledButton>
              </Link>
            </WrapperButton>
          )
          : null}
      </RowColumn>
      <OrderInfo />
    </ContainerCart>
  )
}

const mapStateToProps = (state) => ({
  isLogin: selectIsLogin(state)
})

const OrderPage = connect(mapStateToProps, null)(OrderPageComponent)

OrderPageComponent.propTypes = {
  isLogin: PropTypes.bool.isRequired,
}

export default OrderPage