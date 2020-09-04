import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar__wrapper">
            <nav className="navbar">
                <NavLink className="navbar__item" to="/main">Главная</NavLink>
                <NavLink className="navbar__item" to="/registration">Создать блог / Регистрация</NavLink>
                <NavLink className="navbar__item" to="/auth">Войти</NavLink>
            </nav>
        </div>
    );
}

export default NavBar;