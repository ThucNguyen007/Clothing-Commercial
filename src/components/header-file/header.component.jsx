import React from 'react';

import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
      <div className='options'>
        <Link className='option' to='/shopping'>
          SHOP
        </Link>
        <Link className='option' to='/shopping'>
          CONTACT
        </Link>
    </div>
  </div>
);

export default Header;