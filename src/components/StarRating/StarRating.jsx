import React from 'react';
import PropTypes from 'prop-types';
import { Star } from './Star/Star';

export const StarRating = ({ rating }) => {
  const yellowColor = '#E9A426';
  const greyColor = '#C4C4C4';

  const stars = [1, 2, 3, 4, 5];

  return (
    <span>
      {
        stars.map((star, indx) => {
          const ratingValue = indx + 1;

          return (
            <Star color={ratingValue <= rating ? yellowColor : greyColor} key={star} />
          )
        })
      }
    </span>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired
}

export default StarRating;
