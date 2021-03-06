import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';


import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { ReactComponent as LogoHeader } from '../../assets/open-shop.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <LogoHeader className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shopping'>
        SHOP
      </Link>
      <Link className='option' to='/shopping'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/sign-in'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

/*
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});*/

/*
const mapStateToProps = ({ user: { currentUser}, cart: { hidden } }) => ({
  currentUser, 
  hidden
})*/

/*const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});*/