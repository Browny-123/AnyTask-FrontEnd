import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../auth/UserContext";
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(UserContext);
  return currentUser ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to="/signin" />
  );
};
