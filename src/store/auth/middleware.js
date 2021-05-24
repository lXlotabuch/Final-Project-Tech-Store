import axios from 'axios'
import { message } from 'antd';
import { DOMAIN } from '../../utils/constants'
import { logIn, logOut } from './actionCreator'
import { updateWishlistCreator } from '../wishlist/actionCreator'
import { clearCart } from '../cart/middleware'
import { clearCustomer } from '../customer/actionCreator'

const BASE_ENDPOINT = '/customers'

export const authLogIn = (credentials) => async (dispatch) => {
  const res = await axios.post(`${DOMAIN}${BASE_ENDPOINT}/login`, credentials)
    .then((data) => {
      if (data.status === 200) {
        localStorage.setItem('token', data.data.token)
        dispatch(logIn())
      }
      return data
    })
    .catch((error) => error.response)
  return res
}

export const authLogOut = () => (dispatch) => {
  localStorage.removeItem('token')
  localStorage.removeItem('wishlist')
  dispatch(logOut())
  dispatch(updateWishlistCreator([]))
  dispatch(clearCart())
  dispatch(clearCustomer())
  message.info('You have been logged out from your account.')
}

export default authLogIn
