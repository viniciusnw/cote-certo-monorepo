import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, StylesProvider } from "@material-ui/core";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import "../theme/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-gallery/styles/css/image-gallery.css";

import theme from "../theme/theme";
import { DataProvider } from "../data/apollo-client";
import { AuthenticationUserStateProvider } from "../data/authentication/authenticationUserState";

export default function MyApp(props: AppProps) {
  const router = useRouter();

  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement!.removeChild(jssStyles);
  }, []);

  const RenderComponent = () => {
    if (router.pathname.startsWith("/customer"))
      return (
        <>
          <h4>Customer</h4>
          <Component {...pageProps} />
        </>
      );
    else
      return (
        <>
          <Component {...pageProps} />
        </>
      );
  };

  return (
    <React.Fragment>
      <Head>
        <title>Cote Certo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <DataProvider>
        <ThemeProvider theme={theme.light}>
          <EmotionThemeProvider theme={theme.light}>
            <StylesProvider injectFirst={true}>
              <CssBaseline />
              <AuthenticationUserStateProvider>
                <RenderComponent />
              </AuthenticationUserStateProvider>
            </StylesProvider>
          </EmotionThemeProvider>
        </ThemeProvider>
      </DataProvider>
    </React.Fragment>
  );
}
