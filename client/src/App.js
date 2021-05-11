import React from "react";
import "./App.css";
import Bar from "./components/Bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Data from "./pages/Data";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
          <Data />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
