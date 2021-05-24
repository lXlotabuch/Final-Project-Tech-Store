/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authLogOut } from '../../../store/auth/middleware';
import close from '../../../images/header/Close.svg';
import { NavUserContainer, Close, UlList } from './UserPopUpStyled';
import { selectIsLogin } from '../../../store/auth/reducer';
import { openSlideUser } from '../Utils/Animations'

const mapStateToProps = (state) => ({
  isLogin: selectIsLogin(state)
})

const UserPopUp = connect(mapStateToProps, { authLogOut })(({
  isOpenUser, setIsOpenUser, isLogin, authLogOut
}) => {
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.closest('#userBtn') !== null) {
        setIsOpenUser(() => true);
        return
      }
      if (isOpenUser) {
        if (e.target.closest('#usePopUp') === null) {
          setIsOpenUser(() => false)
        }
      }
    })
  }, [isOpenUser, setIsOpenUser])
  return (
    <NavUserContainer
      id="usePopUp"
      variants={openSlideUser}
      initial={false}
      animate={isOpenUser ? 'show' : 'hidden'}
    >
      <UlList>
        {isLogin ? null : (
          <NavLink to="/signup">
            <li>Create an Account</li>
          </NavLink>
        )}
        {isLogin
          && (
            <NavLink to="/dashboard">
              <li>My Dashboard</li>
            </NavLink>
          )}
        {isLogin
          ? (
            <NavLink to="/" onClick={authLogOut}>
              <li>LogOut</li>
            </NavLink>
          ) : (
            <NavLink to="/signin">
              <li>Sign In</li>
            </NavLink>
          )}
        <Close data-testid="closeImg" onClick={() => setIsOpenUser(false)}>
          <img src={close} alt="close" />
        </Close>
      </UlList>
    </NavUserContainer>
  );
})
UserPopUp.propTypes = {
  isOpenUser: PropTypes.bool.isRequired,
  setIsOpenUser: PropTypes.func.isRequired
}

export default UserPopUp;