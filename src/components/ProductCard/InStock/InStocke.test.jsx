import React from 'react';
import { render } from '@testing-library/react';
import { InStock } from './InStock';

test('ProductCard render test', () => {
  render(
    <InStock />
  )
})