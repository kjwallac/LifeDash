import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Data from "./pages/Data";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
          <Data />
        </Route>
        <Route path="/profile/:profileId" >
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
