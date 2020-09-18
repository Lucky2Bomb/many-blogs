import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    let NavLinkArray = props.navbar.links.map((item) => (
        <NavLink className="navbar__item" to={item.link}>{item.name}</NavLink>
    ));
    return (
        <div className="navbar__wrapper">
            <nav className="navbar">
                {NavLinkArray}
            </nav>
        </div>
    );
}

export default NavBar;