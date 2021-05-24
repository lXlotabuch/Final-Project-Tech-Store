import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  DownOutlined,

} from '@ant-design/icons';
import fireEvent from '@testing-library/user-event';
import PopUpShedulteContainer from './PopUpShedulteContainer';
import { store } from '../../../store/index';

describe('Shedule component test of Header', () => {
  test('Shedule', () => {
    render(
      <Provider store={store}>
        <Router>
          <PopUpShedulteContainer
            isOpenSheduleMenu
            setisOpenSheduleMenu={() => { }}
          />
        </Router>
      </Provider>
    )
  })
})

describe('Events of Header', () => {
  test('Click shadule', () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(
      <Provider store={store}><Router><DownOutlined data-testid="arrowDownShedule" onClick={handleChange} /></Router></Provider>
    )
    const arrowDown = getByTestId('arrowDownShedule')
    expect(handleChange).not.toHaveBeenCalled()
    expect(getByTestId('arrowDownShedule')).toBeInTheDocument()
    fireEvent.click(arrowDown)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})