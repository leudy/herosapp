import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
export const PrivateRoute = ({
  IsAuthenticated,
  component: Component,
  ...rest
}) => {
  localStorage.setItem("lastpath", rest.location.pathname);
  if (rest.location.search.lenght > 2) {
    localStorage.setItem("param", rest.location.search);
    //console.log(rest.location.search);
  }

  return (
    <Route
      {...rest}
      component={(props) =>
        IsAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  IsAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
