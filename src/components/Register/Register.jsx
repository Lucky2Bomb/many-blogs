import React from 'react';
import "../../Sass/style.scss";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={ email:"", password:"", confirmPassword:""} 
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('https://localhost:3001/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "email": this.state.email,
                "password": this.state.password,
                "confimPassword": this.state.confirmPassword
            }
        });
    };
    render() {
        return (
            <div className="registration" >
                <form className="registration__form"
                    id='register'
                    action='http://localhost:3001/register'
                    method='post'
                    >
                    <h2>Регистрация</h2>
                    <input type="email" name="email" placeholder="почта" value={this.state.email} onChange={(ev)=>this.setState({email:ev.target.value})}/>
                    <input type="password" name="password" placeholder="пароль" value={this.state.password} onChange={(ev)=>this.setState({password:ev.target.value})}/>
                    <input type="password" name="confirmPassword" placeholder="повтор пароля" value={this.state.confirmPassword} onChange={(ev)=>this.setState({confirmPassword:ev.target.value})}/>
                    <button type="submit">Зарегестрироваться</button>
                </form>
            </div>
        );
    }
}

export default Registration;