import React from 'react';
import "../../Sass/style.scss";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { email: "", password: "" }
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('https://localhost:3001/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "email": this.state.email,
                "password": this.state.password
            }
        });
    };  
    render() {
        return (
            <div className="auth">
                <form className="auth__form"
                    id='login'
                    action='http://localhost:3001/login'
                    method='post'
                    >
                    <h2>Войти</h2>
                    <input type="email" name="email" placeholder="почта" value={this.state.email} onChange={(ev)=>this.setState({email:ev.target.value})}/>
                    <input type="password" name="password" placeholder="пароль" value={this.state.password} onChange={(ev)=>this.setState({password:ev.target.value})}/>
                    <button type="submit">Войти</button>
                </form>
            </div>
        );
    }
}

// const Auth = (props) => {
//     return (
//         <div className="auth">
//             <form className="auth__form">
//                 <h2>Войти</h2>
//                 <input type="email" name="email" placeholder="почта" />
//                 <input type="password" name="password" placeholder="пароль" />
//                 <button type="submit">Войти</button>
//             </form>
//         </div>
//     );
// }

// export default Auth;