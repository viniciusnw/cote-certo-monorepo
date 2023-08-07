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
  MegaMenu,
  ProductHeader,
  ProductDetails,
  ProductGraph,
  Wrappers,
} from "./../../components";

const Index: NextPage = () => {
  const router = useRouter();

  console.log("router.query", router.query);

  return (
    <>
      <Head>
        <title>Cote Certo - Products</title>
      </Head>
      <PageContainer>
        <Header />
        <MegaMenu />

        <Main>
          <ProductHeader />
          <Wrappers.ProductHorizontalList />
          <ProductGraph />
          <ProductDetails />

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
