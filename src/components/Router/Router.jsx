import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateCustomerPage from '../CreateCustomerPage/CreateCustomerPage'
import AboutUsPage from '../About-us/AboutUs'
import ContactUsPage from '../ContactUs/ContactUsPage'
import ProductPage from '../ProductPage/ProductPage'
import CatalogPage from '../CatalogPage/CatalogPage'
import LogIn from '../LogIn/LogIn'
import Checkout from '../Checkout/Checkout'
import Wishlist from '../WishlistPage/WishlistPage'
import CartPage from '../CartPage/CartPage'
import OrderPage from '../OrderPage/OrderPage'
import NoMatchPage from '../NoMatchPage/NoMatchPage'
import DashBoard from '../DashBoard/DashBoard'
import ReviewSlider from '../ReviewSlider/ReviewSlider'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import OnlyNotAuthRoute from './OnlyNotAuthRoute/OnlyNotAuthRoute'
import HomePage from '../HomePage/HomePage'

const Router = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <OnlyNotAuthRoute exact path="/signin">
      <LogIn />
    </OnlyNotAuthRoute>
    <OnlyNotAuthRoute exact path="/signup">
      <CreateCustomerPage />
    </OnlyNotAuthRoute>
    <Route exact path="/aboutus">
      <AboutUsPage />
      <ReviewSlider />
    </Route>
    <Route exact path="/contactus">
      <ContactUsPage />
    </Route>
    <Route exact path="/cart">
      <CartPage />
    </Route>
    <Route exact path="/checkout">
      <Checkout />
    </Route>
    <Route exact path="/order">
      <OrderPage />
    </Route>
    <Route exact path="/products/:itemNo">
      <ProductPage />
    </Route>
    <Route exact path="/wishlist">
      <Wishlist />
    </Route>
    <Route exact path="/catalog">
      <CatalogPage />
    </Route>
    <PrivateRoute exact path="/dashboard">
      <DashBoard />
    </PrivateRoute>
    <Route>
      <NoMatchPage />
    </Route>
  </Switch>
)
export default Router