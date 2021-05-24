import React, { useEffect } from 'react';
import Heading from '../common/Heading/Heading';
import {ContainerCart} from '../common/Container';
import CartList from './CartList/CartList';
import Summary from './Summary/Summary';
import { RowRevers } from './Flex';

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <ContainerCart>
        <Heading>
          Shopping Cart
        </Heading>
        <RowRevers>
          <Summary />
          <CartList />
        </RowRevers>
      </ContainerCart>
    </div>
  )
}

export default CartPage;