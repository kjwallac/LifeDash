import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/Error";
import CreateProfile from "./pages/Create/CreateProfile";
import Bar from "./components/Bar";
import Account from "./pages/Account/Account";
import SignUp from "./pages/SignUp/SignUp";
import ProfileList from "./pages/ProfileList/ProfileList";
import Notifier from "./components/Notifier";
import EditMode from "./components/EditMode/EditMode";

function App() {
  return (
    <Router>
      <Bar />
      <Notifier />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/account/:id" component={Account} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile/view/:id" component={ProfileList} />
        <Route exact path="/profile/create" component={CreateProfile} />
        <Route exact path="/profile/:profileId" component={Profile} />
        <Route exact path="/profile/edit/:id" component={EditMode} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
