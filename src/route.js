import React from "react";
import { Switch, Route, Router, Navigate } from "react-router-dom";
import RouteGuard from "./RouteGuard.js";

//history
import { history } from "./history";
import All from "./Components/user/All";

//pages
import Loginpage from "./Components/login/login";

function Routess() {
  return (
    <Router history={history}>
      <Switch>
        <RouteGuard exact path="/Home" component={All} />
        <Route path="/" component={Loginpage} />
      </Switch>
      <Navigate to="/" />
    </Router>
  );
}

export default Routess;
