import * as React from 'react';
import { Navigate, Routes } from 'react-router-dom';
import Login from '../../../screens/Login/Login';
import SignUp from '../../../screens/SignUp/SignUp';
import { routing } from '../../routing';
import { USER_LOGIN, SIGNUP } from './routes';

const LoginRouting = routing(Login, {
  suspense: false,
});

const SignUpRouting = routing(SignUp, {
  suspense: false,
});

export const AuthenticationUserRouter = () => {
  return (
    <Routes>
      <LoginRouting path={USER_LOGIN} />
      <SignUpRouting path={SIGNUP} />
    </Routes>
  );
};
