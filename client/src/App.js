import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/Error";
import CreateProfile from "./pages/Create/CreateProfile";
import Bar from "./components/Bar";

function App() {
  return (
    <Router>
      <Bar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile/create" component={CreateProfile} />
        <Route exact path="/profile/:profileId" component={Profile} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
