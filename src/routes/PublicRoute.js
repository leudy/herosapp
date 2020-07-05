import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
export const PublicRoute = ({
  IsAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !IsAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PublicRoute.propTypes = {
  IsAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
