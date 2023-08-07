import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactNode } from "react";
import { AuthenticationUserRouter } from "./routers/authentication/AuthenticationUserRouter";
import { AUTHENTICATION, SHOPPER_AREA } from "./routes";
import { AuthenticationUserStateProvider } from "../data/authentication/authenticationUserState";
import { ShopperRouter } from "./routers/shopper/LoggedRouter";
import { PageContainer } from "../components/PageContainer";

export const AppRouter = () => (
  <AuthenticationUserStateProvider>
    <BrowserRouter>
      <Routes>
        {/* not-logged */}
        <Route path="/" element={<Navigate to={SHOPPER_AREA} />} />
        <Route
          path={AUTHENTICATION + `*`}
          element={<AuthenticationUserRouter />}
        />
        {/* logged */}
        <RouteContent path={`${SHOPPER_AREA}/*`} element={<ShopperRouter />} />
      </Routes>
    </BrowserRouter>
  </AuthenticationUserStateProvider>
);

type RouteContentProps = {
  path: string;
  element: ReactNode;
  hasSidebar?: boolean;
  hasTopbar?: boolean;
};

const RouteContent: React.FC<RouteContentProps> = ({
  path,
  element,
  hasSidebar = true,
  hasTopbar = true,
}) => {
  return (
    <Route
      path={path}
      element={
        <>
          <PageContainer>{element}</PageContainer>
        </>
      }
    />
  );
};
