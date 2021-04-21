import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img  src={logo} alt="ema-john Logo"/>
            <nav className="navBar">
                <a href="/shop">Shop</a>
                <a href="/review">Coustomer Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;