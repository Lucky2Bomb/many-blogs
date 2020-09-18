import React from 'react';
import './Sass/style.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

function App(props) {
  debugger;
  return (
    <div className="App">
      <BrowserRouter>
        <Header state={props.state.header} />
          <div className="content">
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/register" render={() => <Register />} />
            <Route exact path="/profile" render={() => <Profile state={props.state.profile} dispatch={props.dispatch} />} />
            <Route exact path="/login" component={Login} />
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
