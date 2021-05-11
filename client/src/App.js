import React from "react";
import "./App.css";
import Bar from "./components/Bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Bar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}
export default App;
