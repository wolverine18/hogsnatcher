import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import Auth from './Auth';

//pages
import home from "./pages/home";
import Login from "./pages/login";
import signup from "./pages/signup";
import createCatch from "./pages/catch";
import NotFound from "./pages/NotFound";

//components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {Auth.isAuthenticated ? (
        <Router>
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={home}></Route>
              <Route exact path="/signup" component={signup}></Route>
              <Route exact path="/catch" component={createCatch}></Route>
              <Route>
                <NotFound></NotFound>
              </Route>
            </Switch>
          </div>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
          <Redirect to="/login" />
        </Router>
      )
      }
    </div>
  );
}

export default App;
