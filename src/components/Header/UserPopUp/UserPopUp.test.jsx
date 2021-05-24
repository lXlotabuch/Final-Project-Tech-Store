import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  UserOutlined

} from '@ant-design/icons';
import fireEvent from '@testing-library/user-event';
import UserPopUp from './UserPopUp';
import { store } from '../../../store/index';

describe('UserPopUp components test for Header', () => {
  test('UserPopUp', () => {
    render(
      <Provider store={store}>
        <Router>
          <UserPopUp
            isOpenUser
            setIsOpenUser={() => { }}
            isLogin
            authLogOut={() => { }}
          />
        </Router>
      </Provider>
    )
  })
  
  test('UserPopUp closeImg', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Router>
          <UserPopUp
            isOpenUser
            setIsOpenUser={() => { }}
            isLogin
            authLogOut={() => { }}
          />
        </Router>
      </Provider>
    )
    expect(getByTestId('closeImg')).toBeDefined()
  })
})

describe('Events of Header', () => {
  test('Click user', () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <UserOutlined
            data-testid="userBtn"
            onClick={handleChange}
          />
        </Router>
      </Provider>
    )
    const burgerCall = getByTestId('userBtn')
    expect(handleChange).not.toHaveBeenCalled()
    expect(getByTestId('userBtn')).toBeInTheDocument()
    fireEvent.click(burgerCall)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(getByTestId('userBtn')).toBeDefined()
  })
})