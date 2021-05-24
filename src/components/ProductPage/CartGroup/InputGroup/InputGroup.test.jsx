/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import InputGroup from './InputGroup'

describe('All test for input group', () => {
  const props = {
    inputHandler: jest.fn(),
    decreaseHandler: jest.fn(),
    increaseHandler: jest.fn(),
    quantity: 10
  }
  const startQuantity = props.quantity

  test('InputGroup shapshot test', () => {
    const { asFragment } = render(<InputGroup {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('check the props value in the input', () => {
    const { getByDisplayValue } = render(<InputGroup {...props} />)
    expect(getByDisplayValue(startQuantity)).toBeDefined()
  })
  
  test('check is handler has been called', () => {
    const { getByDisplayValue } = render(<InputGroup {...props} />)
    const input = getByDisplayValue(startQuantity)

    fireEvent.change(input, { target: { value: '11' } })
    expect(props.inputHandler).toHaveBeenCalled()

    fireEvent.change(input, { target: { value: '12' } })
    expect(props.inputHandler).toHaveBeenCalledTimes(2)
  })

  test('check is increaseHandler works', () => {
    let quantity = 10
    const increaseHandler = jest.fn().mockImplementation(() => quantity += 1)
    const inputHandler = jest.fn()
    const decreaseHandler = jest.fn()
    
    const { getByDisplayValue } = render(<InputGroup
      quantity={quantity}
      inputHandler={inputHandler}
      increaseHandler={increaseHandler}
      decreaseHandler={decreaseHandler}
    />)
    const arrowTop = getByDisplayValue(startQuantity).nextElementSibling.children[0]

    expect(quantity).toBe(10)
    fireEvent.click(arrowTop)
    expect(increaseHandler).toHaveBeenCalled()
    expect(quantity).toBe(11)
  })

  test('check is decreaseHandler works', () => {
    let quantity = 10
    const decreaseHandler = jest.fn().mockImplementation(() => quantity -= 1)
    const increaseHandler = jest.fn()
    const inputHandler = jest.fn()
    
    const { getByDisplayValue } = render(<InputGroup
      quantity={quantity}
      inputHandler={inputHandler}
      increaseHandler={increaseHandler}
      decreaseHandler={decreaseHandler}
    />)
    const arrowDown = getByDisplayValue(startQuantity).nextElementSibling.children[1]
    expect(quantity).toBe(10)
    fireEvent.click(arrowDown)
    expect(decreaseHandler).toHaveBeenCalled()
    expect(quantity).toBe(9)
  })
})