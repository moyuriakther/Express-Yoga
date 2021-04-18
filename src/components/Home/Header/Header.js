import React from 'react';
import Navbar from '../../Share/Nav/Nav';
import HeaderBody from '../HeaderBody/HeaderBody';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <HeaderBody/>
        </div>
    );
};

export default Header;