import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Main,
  Header,
  Footer,
  PageContainer,
  MegaMenu,
  StoreEvaluation,
} from "../../components";

const Index: NextPage = () => {
  const router = useRouter();

  console.log("router.query", router.query);

  return (
    <>
      <Head>
        <title>Cote Certo - Avaliação em lojas</title>
      </Head>
      <PageContainer>
        <Header />
        <MegaMenu />
        <Main>
          <StoreEvaluation />
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
