import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//pages
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import createCatch from './pages/catch'

//components
import Navbar  from './components/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route exact path="/" component={home}></Route>
            <Route exact path="/login" component={login}></Route>
            <Route exact path="/signup" component={signup}></Route>
            <Route exact path="/catch" component={createCatch}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
