import React from 'react';
import "../../Sass/style.scss";

const Registration = (props) => {
    return (
        <div className="registration">
            <form className="registration__form">
            <h2>Регистрация</h2>
                <input type="email" name="email" placeholder="почта"/>
                <input type="password" name="password" placeholder="пароль"/>
                <input type="password" name="confirmPassword" placeholder="повтор пароля"/>
                <button>Зарегестрироваться</button>
            </form>
        </div>
    );
}

export default Registration;