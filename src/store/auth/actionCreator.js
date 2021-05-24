import {
  LOG_IN, LOG_OUT
} from './actionType';

export const logIn = () => ({
  type: LOG_IN,
})

export const logOut = () => ({
  type: LOG_OUT,
})