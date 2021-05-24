import React from 'react';
import PropTypes from 'prop-types';
import { StyledStarFilledIcon } from '../StyledStarRating';

export const Star = ({ color }) => (
  <StyledStarFilledIcon color={color} />
)

Star.propTypes = {
  color: PropTypes.string.isRequired
}

export default Star;
