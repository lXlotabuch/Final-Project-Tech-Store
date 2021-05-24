import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { shallow } from 'enzyme'
import StyledButton from './StyledButton'

describe('All tests for StyledButton', () => {
  test('StyledButton render test', () => {
    render(<StyledButton color="black" size="md" />)
  })

  test('Check is button has a passed props', () => {
    const result = shallow(<StyledButton color="black" size="md" />)
    expect(result.get(0).props.color).toBe('black')
    expect(result.get(0).props.size).toBe('md')
  })
  
  test('Check is callback has been called by the click', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<StyledButton color="black" size="md" onClick={handleClick}>Click me</StyledButton>)
    fireEvent.click(getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})