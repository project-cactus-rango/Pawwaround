import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Regiter from "./pages/Register/Register";
import Landing from "./pages/Landing/Landing";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Regiter} />
    </Switch>
  );
}
