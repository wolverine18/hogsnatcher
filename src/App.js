import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//pages
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import Bass from './pages/bass'
import NotFound from './pages/NotFound'

//components
import Navbar  from './components/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route exact path="/home" component={home}></Route>
            <Route exact path="/" component={login}></Route>
            <Route exact path="/signup" component={signup}></Route>
            <Route exact path="/bass" component={Bass}></Route>
            <Route><NotFound></NotFound></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
