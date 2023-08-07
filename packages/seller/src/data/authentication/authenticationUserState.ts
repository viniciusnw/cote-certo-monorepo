import { useReducer } from 'react';
import constate from 'constate';
import {
  getUserCookie,
  removeUserCookie,
  setUserCookie,
  User,
} from './authenticationUserCookies';

type UserState = {
  token: string | null;
  nome: string | null;
  isAuthenticated: boolean;
};

enum UserActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

type UserActionLogin = {
  type: UserActionType.LOGIN;
  payload: User;
};
type UserActionLogout = { type: UserActionType.LOGOUT };

const userStateReducer = (
  state: UserState,
  action: UserActionLogin | UserActionLogout,
): UserState => {
  switch (action.type) {
    case UserActionType.LOGIN:
      return {
        token: action.payload.token,
        nome: action.payload.nome,
        isAuthenticated: true,
      };
    case UserActionType.LOGOUT:
      return {
        token: null,
        nome: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const userLoginAction = (user: User): UserActionLogin => {
  return {
    type: UserActionType.LOGIN,
    payload: user,
  };
};

const userLogoutAction = (): UserActionLogout => {
  return { type: UserActionType.LOGOUT };
};

const userCookie = getUserCookie();

const initialUserState: UserState = {
  token: userCookie?.token || null,
  nome: userCookie?.nome || null,
  isAuthenticated: !!userCookie,
};

const useAuthenticationUserStateContext = () => {
  const [userState, dispatch] = useReducer(userStateReducer, initialUserState);

  const login = (user: User) => {
    dispatch(userLoginAction(user));
    setUserCookie(user);
  };

  const logout = () => {
    dispatch(userLogoutAction());
    removeUserCookie();
  };

  const refresh = () => {
    const currentUserCookie = getUserCookie();
    if (currentUserCookie) {
      dispatch(userLoginAction(currentUserCookie));
    } else {
      dispatch(userLogoutAction());
    }
  };

  return {
    user: userState,
    login,
    logout,
    refresh,
  };
};

export const [
  AuthenticationUserStateProvider,
  useAuthenticationUserState,
] = constate(useAuthenticationUserStateContext);
