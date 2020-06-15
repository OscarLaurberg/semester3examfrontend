import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.jsx';

const ProtectedRoute = ({ children, authenticatedRoles, ...rest }) => {
  const {
    user: { isLoggedIn, roles }
  } = useAuth();
  return (
    <Route
      {...rest}
      render={() =>
        isLoggedIn && roles.some((r) => authenticatedRoles.indexOf(r) >= 0) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/unauthorized'
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
