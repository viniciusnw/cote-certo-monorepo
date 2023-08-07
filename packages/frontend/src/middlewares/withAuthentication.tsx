import { AppContext } from "next/app";

import { withConditionalRedirect } from "./withConditionalRedirect";
import { useAuthenticationUserState } from "../data/authentication/authenticationUserState";

export function withAuthentication(WrappedComponent: AppContext["Component"]) {
  return withConditionalRedirect({
    WrappedComponent,
    location: "/login",
    clientConditionRedirect: () => {
      const { user } = useAuthenticationUserState();
      return !user.isAuthenticated;
    },
    serverConditionRedirect: (ctx) => {
      return !(
        ctx.req?.headers.cookie &&
        ctx.req.headers.cookie.includes("@cotecerto/frontend")
      );
    },
  });
}
