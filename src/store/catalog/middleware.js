/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import axios from 'axios';
import { DOMAIN} from '../../utils/constants';
import {
  setProductsToCatalog,
  setCatalogProductsQuantity,
  cleanCatalogProducts,
  setSearchProducts,
  setMinMaxPrice,
  startLoading,
  stopLoading
} from './actionCreator';

const BASE_ENDPOINT = '/products'

export const getProductsToCatalog = (param) => (dispatch) => {
  dispatch(cleanCatalogProducts())
  dispatch(startLoading())
  const res = axios.get(`${DOMAIN}${BASE_ENDPOINT}/filter${param}`)
    .then((res) => {
      if (res.status === 200) {
        const notAvaliable = []
        const inStock = res.data.products.filter((el) => {
          if (el.quantity === 0) {
            notAvaliable.push(el)
          } else return el
        })
        dispatch(setProductsToCatalog([...inStock, ...notAvaliable]))
        dispatch(setCatalogProductsQuantity(res.data.productsQuantity))
        dispatch(stopLoading())
      }
      return res
    })
    .catch((error) => {
      dispatch(setCatalogProductsQuantity(0))
      dispatch(stopLoading())
      return error
    })
  return res
}

export const getSearchProducts = (searchPhrases) => (dispatch) => {
  axios
    .post(`${DOMAIN}${BASE_ENDPOINT}/search`, searchPhrases)
    .then(({data}) => {
      dispatch(setSearchProducts(data))
    })
    .catch((err) => err);
}

export const getMinMaxPrice = () => (dispatch) => {
  axios.get(`${DOMAIN}${BASE_ENDPOINT}`)
    .then(({status, data}) => {
      if (status === 200) {
        const price = [Infinity, -Infinity]
        data.forEach((el) => {
          if (el.currentPrice < price[0]) {
            price[0] = +el.currentPrice
          }
          if (el.currentPrice > price[1]) {
            price[1] = +el.currentPrice
          }
        })
        dispatch(setMinMaxPrice(price))
      }
    })
    .catch((error) => error.response)
}