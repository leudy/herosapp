import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../Login/LoginScreen";
import { ComicsRoute } from "./ComicsRoute";

export default function AppRoute() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen}></Route>
          <Route path="/" component={ComicsRoute}></Route>
        </Switch>
      </div>
    </Router>
  );
}
