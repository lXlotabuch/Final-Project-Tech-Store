import React from 'react'
import { PropTypes } from 'prop-types'
import {
  InputBox, StyledInput, ArrowsBox, ArrowBox
} from './StylesInputGroup'

const InputGroup = ({
  inputHandler, decreaseHandler, increaseHandler, quantity
}) => (
  <InputBox>
    <StyledInput onChange={inputHandler} value={quantity} />
    <ArrowsBox>
      <ArrowBox
        id="topArrow"
        onClick={increaseHandler}
      >
        <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3.8999L3 1.8999L5 3.8999" stroke="#8C8C8C" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </ArrowBox>
      <ArrowBox
        onClick={decreaseHandler}
      >
        <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0.820068L3 2.82007L1 0.820068" stroke="#8C8C8C" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </ArrowBox>
    </ArrowsBox>
  </InputBox>
)

InputGroup.propTypes = {
  quantity: PropTypes.number.isRequired,
  inputHandler: PropTypes.func.isRequired,
  decreaseHandler: PropTypes.func.isRequired,
  increaseHandler: PropTypes.func.isRequired
}

export default InputGroup