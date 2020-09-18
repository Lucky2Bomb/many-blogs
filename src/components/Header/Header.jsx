import React from 'react';
import "../../Sass/style.scss";
import NavBar from './NavBar/NavBar';

const Header = (props) => {
    // debugger;
    return (
        <header className="header">
            <NavBar navbar={props.state.navbar}/>
        </header>
    );
}

export default Header;