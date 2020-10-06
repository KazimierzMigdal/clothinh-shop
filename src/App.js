import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect,
        Route,
        Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component.js';
import CheckoutPage from './pages/checkout/checkout.component.js';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.js';
import ShopPage from './pages/shop/shop.component.js';
import HomePage from './pages/homepage/homepage.component.js';

import { checkUserSession } from './redux/user/user.action.js';
import { selectCurrentUser } from './redux/user/user.selectors.js';

import './App.css';


const  App = ({ checkUserSession, currentUser }) => { 

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' 
          render={() => 
            currentUser ? (
              <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              ) 
          }
        />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
