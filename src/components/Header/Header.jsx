import React from 'react';
import "../../Sass/style.scss";
import NavBar from './NavBar/NavBar';

const Header = (props) => {
    return (
        <header className="header">
            <NavBar />
        </header>
    );
}

export default Header;