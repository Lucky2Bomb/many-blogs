import React from 'react';
import './Sass/style.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Auth from './components/Auth/Auth';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Route exact path="/main" component={MainPage}/>
          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/auth" component={Auth} />

        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
