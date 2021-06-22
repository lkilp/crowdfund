import React from 'react';
import './Header.scss';

const Header = () => {
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
                <div className="hamburger"></div>
                </div>
            </div>
            
        </div>
    )
}
export default Header;