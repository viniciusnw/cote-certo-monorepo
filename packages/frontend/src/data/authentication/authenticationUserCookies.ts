import Cookies from 'js-cookie';

const USER_COOKIE_KEY = '@cotecerto/frontend';

export type User = {
  token: string;
  nome: string;
};

export const setUserCookie = (user: User) => {
  Cookies.set(USER_COOKIE_KEY, JSON.stringify(user));
};

export const removeUserCookie = () => {
  Cookies.remove(USER_COOKIE_KEY);
};

export const getUserCookie = (): User | null => {
  const cookie = Cookies.get(USER_COOKIE_KEY);
  return cookie && JSON.parse(cookie);
};
