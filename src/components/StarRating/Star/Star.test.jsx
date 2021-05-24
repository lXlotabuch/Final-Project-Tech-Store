import React from 'react';
import { render } from '@testing-library/react';
import { Star } from './Star';

test('ProductCard render test', () => {
  render(
    <Star color="#fff" />
  )
})