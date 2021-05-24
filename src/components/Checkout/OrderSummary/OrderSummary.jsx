import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCartSummary, selectShippingCost } from '../../../store/cart/reducer';
import StyledOrderSummary from './StyledOrderSummary';
import { RowBetween } from '../../CartPage/Flex';

export const OrderSummaryComponent = ({summary, shippingCost}) => (
  <StyledOrderSummary>
    <h4>Order summary</h4>
    <RowBetween>
      <div>
        <p className="sumtotal">
          Items total:
        </p>
      </div>
      <div>
        <span className="sumtotal">
          ₴
          {summary}
        </span>
      </div>
    </RowBetween>
    <RowBetween>
      <div>
        <p className="sumtotal">
          Shipping:
        </p>
      </div>
      <div>
        <span className="sumtotal">
          ₴
          {shippingCost}
        </span>
      </div>
    </RowBetween>
    <div className="line">
      <RowBetween>
        <div>
          <p className="ordertotal">
            Order total:
          </p>
        </div>
        <div>
          <span className="ordertotal">
            {summary + shippingCost}
            ₴
          </span>
        </div>
      </RowBetween>
    </div>
  </StyledOrderSummary>
)

const mapStateToProps = (state) => ({
  summary: selectCartSummary(state),
  shippingCost: selectShippingCost(state),
})

const OrderSummary = connect(mapStateToProps, null)(OrderSummaryComponent)

OrderSummaryComponent.propTypes = {
  summary: PropTypes.number.isRequired,
  shippingCost: PropTypes.number.isRequired,
}

export default OrderSummary;