import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import StyledButton from '../../common/Buttons/StyledButton';
import { selectCartSummary } from '../../../store/cart/reducer';
import StyledSummary from './StyledSummary';
import { RowBetween } from '../Flex';

export const SummaryComponent = ({summary}) => {
  const history = useHistory()

  const onClick = (summary) => {
    if (summary === 0) {
      message.warning('Your shopping cart is empty. Please add items to your shopping cart');
    } else {
      history.push('/checkout')
    }
  }

  return (
    <StyledSummary>
      <h4>Summary</h4>
      <RowBetween>
        <div>
          <p className="sumtotal">
            Items total:
          </p>
        </div>
        <div>
          <span className="sumtotal">
            {summary}
            ₴
          </span>
        </div>
      </RowBetween>
      <div>
        <StyledButton
          shape="round"
          color="yellow"
          onClick={() => onClick(summary)}
        >
          Proceed to Checkout
        </StyledButton>
      </div>
    </StyledSummary>
  )
}

const mapStateToProps = (state) => ({
  summary: selectCartSummary(state),
})

const Summary = connect(mapStateToProps, null)(SummaryComponent);

SummaryComponent.propTypes = {
  summary: PropTypes.number.isRequired,
}

export default Summary;