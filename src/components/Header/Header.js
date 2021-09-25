import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className="header-container">
           <div className="logo">
            <img src={logo} alt="" />
           </div>
           <nav className="header-nav">
               <a href="/shop">Shop</a>
               <a href="/orders">Order Preview</a>
               <a href="/inventory">Manage Inventory</a>
           </nav>
        </div>
    );
};

export default Header;