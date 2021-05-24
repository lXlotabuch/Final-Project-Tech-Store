import React from 'react';
import { ProductSoldOutWrapper, SoldOutIcon, SoldOutText } from './StyledProductSoldOut';

export const ProductSoldOut = () => (
  <ProductSoldOutWrapper>
    <SoldOutIcon />
    <SoldOutText>sold out</SoldOutText>
  </ProductSoldOutWrapper>
)

export default ProductSoldOut;
