import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { machMedia } from '../../../mocks/matchMedia.mock';
import Modal from './DashBoardModal'
import { store } from '../../../store/index'

describe('ModalComponent', () => {
  beforeEach(() => {
    machMedia()
  })
  test('render', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <Modal
          formId=""
          show
        />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})