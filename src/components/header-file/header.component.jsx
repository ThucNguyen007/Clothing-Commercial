import React from 'react';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
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
    </div>
  </div>
);

export default Header;