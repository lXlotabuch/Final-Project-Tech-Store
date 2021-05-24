import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ProductCard } from './ProductCard';
import rateCalculator from '../../utils/rateCalculator';
import { store } from '../../store/index'

describe('All tests for product card', () => {
  test('ProductCard render test', () => {
    const productInfo = {
      name: 'Apple MacBook Air 13 256Gb Space Gray (MWTJ2) 2020',
      imageUrls: [
        'https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg',
      ],
      previousPrice: 644,
      currentPrice: 544,
      reviews: [5, 5, 5, 5, 5],
      quantity: 21,
      itemNo: '3232432'
    }

    render(
      <Provider store={store}>
        <Router>
          <ProductCard
            productInfo={productInfo}
          />
        </Router>
      </Provider>
    )
  })

  test('chek is rateCalculator returns object with correct keys', () => {
    const expected = {
      reviewsQuantity: 5,
      rating: 5,
    }
    expect(rateCalculator([5, 5, 5, 5, 5])).toBeInstanceOf(Object)
    expect(rateCalculator([5, 5, 5, 5, 5])).toMatchObject(expected)
  })
})