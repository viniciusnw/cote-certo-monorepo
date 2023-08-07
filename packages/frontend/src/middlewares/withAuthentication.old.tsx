import React from "react";
import { AppContext } from "next/app";
import { useRouter } from "next/router";

import { useAuthenticationUserState } from "../data/authentication/authenticationUserState";

export const withAuthentication = (Component: AppContext["Component"]) => {
  const Auth = (props: any) => {
    const router = useRouter();
    const { user } = useAuthenticationUserState();
    if (typeof window === "undefined") return <></>;
    if (user.isAuthenticated) {
      router.push("/");
      return <></>;
    }
    return <Component {...props} />;
  };

  if (Component.getInitialProps)
    Auth.getInitialProps = Component.getInitialProps;

  return Auth;
};
