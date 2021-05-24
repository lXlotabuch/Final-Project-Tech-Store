import axios from 'axios';
import { DOMAIN, getHeaders } from '../../utils/constants';
import {
  setProducts,
  addProduct,
  updateProduct,
  startLoading,
  stopLoading
} from './actionCreator';

const BASE_ENDPOINT = `${DOMAIN}/products`

export const getProducts = () => (dispatch) => {
  dispatch(startLoading())
  axios.get(BASE_ENDPOINT)
    .then((data) => {
      if (data.status === 200) {
        dispatch(setProducts(data.data))
      }
    })
    .catch((error) => error.response)
    .finally(() => {
      dispatch(stopLoading())
    })
}

export const addOneProduct = (newProduct) => (dispatch) => {
  const headers = getHeaders()
  const res = axios.post(BASE_ENDPOINT, newProduct, { headers })
    .then((data) => {
      if (data.status === 200) {
        dispatch(addProduct(newProduct))
      }
      return data
    })
    .catch((error) => error.response)
  return res
}

export const updateOneProduct = (id, newProduct) => (dispatch) => {
  const headers = getHeaders()
  const res = axios.put(`${BASE_ENDPOINT}/${id}`, newProduct, { headers })
    .then((data) => {
      if (data.status === 200) {
        dispatch(updateProduct(data.data))
      }
      return data
    })
    .catch((error) => error.response)

  return res
}

export const getOneProduct = (itemNo) => {
  const res = axios.get(`${BASE_ENDPOINT}/${itemNo}`)
    .then((data) => data)
    .catch((error) => error.response)
  return res
}

export const getFilteredProducts = (param, actionCreator) => (dispatch) => {
  dispatch(startLoading())
  let paramStr = ''
  Object.keys(param).forEach((key, index) => {
    if (index === 0) {
      return paramStr += `${key}=${param[key]}`
    }
    return paramStr += `&${key}=${param[key]}`
  })
  const res = axios.get(`${BASE_ENDPOINT}/filter?${paramStr}`)
    .then((res) => {
      if (res.status === 200) dispatch(actionCreator(res.data.products))
      return res
    })
    .catch((error) => error.response)
    .finally(() => {
      dispatch(stopLoading())
    })
  return res
}