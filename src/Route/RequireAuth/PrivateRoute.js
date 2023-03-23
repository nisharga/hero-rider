import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Redirect } from "react-router-dom";
import auth from "../Firebase_Auth/Auth";

const PrivateRoute = ({ children, ...rest }) => {
  let [user] = useAuthState(auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
