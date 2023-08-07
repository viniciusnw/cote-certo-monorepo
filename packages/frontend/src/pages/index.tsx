import React from "react";
import Head from "next/head";
import { NextPage } from "next";

import {
  Main,
  Header,
  Footer,
  Carousel,
  Wrappers,
  MegaMenu,
  NewsLetter,
  PageContainer,
  BannersBrands,
  MostCategories,
  BannersSuggests,
} from "./../components";

const Index: NextPage = (props) => {
  console.log(props)
  return (
    <>
      <Head>
        <title>Cote Certo - Home</title>
      </Head>
      <PageContainer>
        <Header />
        <MegaMenu />

        <Main>
          <Carousel />
          <Wrappers.ProductsTwoRowsList />
          <BannersBrands />
          <Wrappers.BestProductsPriceList />
          <BannersSuggests />
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
  return {
    t: 'Teste'
  };
};

export default Index;
