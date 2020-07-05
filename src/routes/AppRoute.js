import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../Login/LoginScreen";
import { ComicsRoute } from "./ComicsRoute";
import { AuthContext } from "../auth/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export default function AppRoute() {
  const { user } = useContext(AuthContext);
  console.log(user.logged);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
          ></PublicRoute>
          
          <PrivateRoute
            path="/"
            IsAuthenticated={user.logged}
            component={ComicsRoute}
          ></PrivateRoute>
          {/* <Route path="/" component={ComicsRoute}></Route> */}
        </Switch>
      </div>
    </Router>
  );
}
