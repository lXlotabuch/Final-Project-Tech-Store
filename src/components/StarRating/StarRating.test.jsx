import React from 'react';
import { render } from '@testing-library/react';
import { StarRating } from './StarRating';

test('StarRating render test', () => {
  render(
    <StarRating rating={4} />
  )
})