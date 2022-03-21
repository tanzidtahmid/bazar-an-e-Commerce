import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
        {...rest}
        render={({ location }) =>
        // (signedInUser.email || 
          localStorage.getItem('email')? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;