import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";

import {
  Main,
  Header,
  Footer,
  NewsLetter,
  PageContainer,
  MostCategories,
  Wrappers,
  MegaMenu,
  ProductBanner,
} from "../../components";
import { isBrowser } from "../../utils";

const Index: NextPage = () => {
  const router = useRouter();

  console.log("router.query", router.query);

  function geo_success(position: GeolocationPosition) {
    console.log(position);
  }

  function geo_error(err: GeolocationPositionError) {
    console.log(err);
  }

  if (isBrowser()) {
    const geoOptions: PositionOptions = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };
    let wpid = navigator.geolocation.watchPosition(
      geo_success,
      geo_error,
      geoOptions
    );
    console.log("geolocation.watchId", wpid);
  }

  return (
    <>
      <Head>
        <title>Cote Certo - Categoria</title>
      </Head>
      <PageContainer>
        <Header />
        <MegaMenu />
        <ProductBanner />
        
        <Main>
          <Wrappers.ProductFullList />
          <Wrappers.BestProductsPriceList />
          <MostCategories />
          <NewsLetter />
        </Main>

        <Footer />
      </PageContainer>
    </>
  );
};

Index.getInitialProps = async ({ req }) => {
  // const res = await fetch("https://api.github.com/repos/vercel/next.js");
  // const json = await res.json();
  req;
  // console.log(json);
  // console.log("Apollo Client", client.version);
  // console.log("req?.headers", req?.headers);
  return {};
};

export default Index;
