import React from 'react';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

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
      <div>
        {hidden ? null : <CartDropdown />}
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ user: { currentUser}, cart: { hidden } }) => ({
  currentUser, 
  hidden
})

/*const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});*/

export default connect(mapStateToProps) (Header);