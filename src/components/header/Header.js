import React from "react";
import Logo from '../../images/logo512.png';
import SearchIcon from '../../images/SearchIcon.png';

import "./Header.css";

function Header(props) {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search" className="search-bar">
                </input>
            </div>
        </div>
    );
}

export default Header;