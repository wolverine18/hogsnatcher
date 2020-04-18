import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//pages
import home from './pages/Home'
import login from './pages/Login'
import Bass from './pages/Bass'
import NotFound from './pages/NotFound'
import Salmon from './pages/Salmon'
import Walleye from './pages/Walleye'
import About from './pages/About'

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
            <Route exact path="/bass" component={Bass}></Route>
            <Route exaxt path="/salmon" component={Salmon}></Route>
            <Route exaxt path="/walleye" component={Walleye}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route><NotFound></NotFound></Route>    
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
