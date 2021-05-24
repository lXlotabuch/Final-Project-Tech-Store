/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { selectIsLogin } from '../../../store/auth/reducer'

const mapStateToProps = (state) => ({isLogin: selectIsLogin(state)})

const OnlyNotAuthRoute = connect(mapStateToProps, null)(({ isLogin, children, ...props }) => (
  <Route {...props}>
    {isLogin ? <Redirect to="/" /> : children}
  </Route>
))

export default OnlyNotAuthRoute