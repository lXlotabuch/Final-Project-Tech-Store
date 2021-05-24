/* eslint-disable consistent-return */
import React from 'react';
import { connect } from 'react-redux';
import OrderComponent from './OrderComponent';
import OrderWrapper from './StyledOrders';
import { selectOrders } from '../../../store/customer/reducer'

const mapStateToProps = (state) => ({
  orders: selectOrders(state)
})

const Orders = connect(mapStateToProps, null)(({orders}) => (
  <div style={{marginTop: '20px'}}>
    <div>
      <h5 style={{
        textAlign: 'center',
        fontSize: '20px',
        paddingBottom: '20px'
      }}
      >
        My Orders
      </h5>
    </div>
    <OrderWrapper>
      {orders.map((item) => (
        <OrderComponent
          key={item.orderNo}
          order={item}
        />
      ))}
    </OrderWrapper>
  </div>
))

export default Orders;