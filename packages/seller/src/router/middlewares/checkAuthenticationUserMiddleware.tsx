import * as React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthenticationUserState } from '../../data/authentication/authenticationUserState';

import { AUTHENTICATION_USER_LOGIN } from '../routes';

export function checkAuthenticationUserMiddleware() {
  return <T extends {}>(WrappedComponent: React.ComponentType<T>) => {
    const AuthenticatedComponent = (props: T) => {
      const { user } = useAuthenticationUserState();
      if (!user.isAuthenticated) {
        return <Navigate to={AUTHENTICATION_USER_LOGIN} />;
      }

      return <WrappedComponent {...props} />;
    };

    AuthenticatedComponent.displayName = `CheckAuthenticationUserMiddleware${WrappedComponent.displayName}`;

    return AuthenticatedComponent;
  };
}
