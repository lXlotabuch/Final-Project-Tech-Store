/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'

configure({ adapter: new Adapter() });

React.useLayoutEffect = jest.fn().mockImplementation(() => React.useLayoutEffect)

window.scrollTo = () => null

jest.mock('axios')
