import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  MenuOutlined,

} from '@ant-design/icons';
import fireEvent from '@testing-library/user-event';
import PopUpList from './PopUpList';
import { store } from '../../../store/index';

// describe('PopUpList components test for Header', () => {
//   test('PopUpList', () => {
//     render(
//       <Provider store={store}>
//         <Router>
//           <PopUpList
//             openSlide={{ }}
//             isOpen
//             openCloseMenu={() => { }}
//             setIsOpen={() => { }}
//             hideList
//             checkForLinkOpen={() => { }}
//           />
//         </Router>
//       </Provider>
//     )
//   })
// })

describe('Events of Header', () => {
  test('Click burger', () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <MenuOutlined
            data-testid="burger"
            onClick={handleChange}
          />
        </Router>
      </Provider>
    )
    const burgerCall = getByTestId('burger')
    expect(handleChange).not.toHaveBeenCalled()
    expect(getByTestId('burger')).toBeInTheDocument()
    fireEvent.click(burgerCall)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})