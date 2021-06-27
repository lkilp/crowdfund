import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return(
        <div className="Header">
            <div className="filter">
                <div className="navigation-bar">
                <div className="logo"><a href='/'>crowdfund</a></div>
                <nav>
                    <a href="/">About</a>
                    <a href="/">Discover</a>
                    <a href="/">Get Started</a>
                </nav>
                <div className={"hamburger" + (menuOpen ? " close" : "")} onClick={() => toggleMenu()} ></div>
                </div>
                { menuOpen && <div className="mobile-filter"/> }
                { menuOpen && <div className="mobile-menu">
                    <a href='/'>About</a>
                    <a href='/'>Discover</a>
                    <a href='/'>Get Sarted</a>
                </div> }
            </div>
        </div>
    )
}
export default Header;