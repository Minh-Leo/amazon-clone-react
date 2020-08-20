import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import './Header.css';

function Header() {
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='logo'
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      {/* nav links */}
      <div className='header__nav'>
        {/* 1st link */}
        {/* <Link to={!user && "/login"} className="header__link"> */}
        {/* <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
                    </div> */}
        {/* </Link> */}

        {/* 2nd link */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>

        {/* basket icon with number */}
        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            {/* Shopping Basket Icon */}
            <ShoppingBasketIcon />
            {/* Number of items in the basket */}
            {/* <span className="header__optionLineTwo header__basketCount">{basket?.length}</span> */}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
