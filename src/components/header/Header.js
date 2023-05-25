import React from "react";
import MenuIcon from '../../images/MenuIcon.png';
import BetterYoutubeLogo from '../../images/BetterYoutubeLogo.png';
import SearchIcon from '../../images/SearchIcon.png';

import "./Header.css";

function Header(props) {
    function HomePage() {
        props.setContentData({ type: "Home", title: null, author: null, likes: null, views: null, date: null, desc: null });
    }

    return (
        <div className="header">
            <button className="menu-container">
                <img src={MenuIcon} alt="Menu" className="menu-icon" />
            </button>
            <button className="logo-container" onClick={HomePage}>
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