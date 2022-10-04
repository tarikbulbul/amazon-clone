import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <Link to="/">
            <img 
              className='header-logo'
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
              alt='headerLogo'
            />
        </Link>

        <div className='header-search'>
            <input className='header-searchInput' type='text' />
            <SearchIcon className='header-searchIcon' />
        </div>

        <div className='header-nav'>
            <Link to='/login'>
              <div className='header-option'>
                <span className='header-optionLineOne'>
                  Hello Guest
                </span>
                <span className='header-optionLineTwo'>
                  Sign In
                </span>
              </div>
            </Link>
            
            <Link to='/orders'>
              <div className='header-option'>
                <span className='header-optionLineOne'>Returns</span>
                <span className='header-optionLineTwo'>& Orders</span>
              </div>
            </Link>

          <div className='header-option'>
            <span className='header-optionLineOne'>Your</span>
            <span className='header-optionLineTwo'>Prime</span>
          </div>

          <Link to='/checkout'>
            <div className='header-optionBasket'>
              <ShoppingBasketIcon />
              <span className='header-basketCount'>0</span>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Header