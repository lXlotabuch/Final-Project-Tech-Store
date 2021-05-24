import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { SliderArrowTeamplate } from './SliderArrowTeamplate'

const ArrowLeftTeamplate = styled(SliderArrowTeamplate)`
  left: 0;
  border-radius: 0px 30px 30px 0px;
`
export const SliderArrowLeft = ({ onClick }) => (
  <ArrowLeftTeamplate onClick={onClick}>
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
      <path d="M7 1L2 6L7 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </ArrowLeftTeamplate>
)
SliderArrowLeft.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SliderArrowLeft