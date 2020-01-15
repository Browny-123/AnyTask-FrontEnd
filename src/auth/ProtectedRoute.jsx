import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./useAuth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to="/signin" />
  );
};
