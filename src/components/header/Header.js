import React from "react";
import BetterYoutubeLogo from '../../images/BetterYoutubeLogo.png';
import SearchIcon from '../../images/SearchIcon.png';

import "./Header.css";

function Header(props) {
    return (
        <div className="header">
            <button className="logo-container">
                <img src={BetterYoutubeLogo} alt="Logo" className="logo" />
            </button>
            <div className="search-container">
                <input type="text" placeholder="Search" className="search-bar" />
                <button className="search-bar-icon-container">
                    <img className="search-bar-icon" src={SearchIcon} alt="Search Icon" />
                </button>
            </div>
        </div>
    );
}

export default Header;