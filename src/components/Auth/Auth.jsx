import React from 'react';
import "../../Sass/style.scss";

const Auth = (props) => {
    return (
        <div className="auth">
            <form className="auth__form">
            <h2>Регистрация</h2>
                <input type="email" name="email" placeholder="почта"/>
                <input type="password" name="password" placeholder="пароль"/>
                <button>Войти</button>
            </form>
        </div>
    );
}

export default Auth;