import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { SliderArrowTeamplate } from './SliderArrowTeamplate'

const ArrowRightTeamplate = styled(SliderArrowTeamplate)`
  right: 0;
  border-radius: 30px 0px 0px 30px;
`
export const SliderArrowRight = ({ onClick }) => (
  <ArrowRightTeamplate onClick={onClick}>
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px'}}>
      <path d="M1 11L6 6L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </ArrowRightTeamplate>
)
SliderArrowRight.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SliderArrowRight
