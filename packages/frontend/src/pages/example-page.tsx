import React from "react";
import Head from "next/head";
import gql from "graphql-tag";
import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { Typography, Container, Box } from "@material-ui/core";

import { client } from "./../data/apollo-client";
import { Link, Header, Footer, PageContainer } from "./../components";

import { withAuthentication } from "../middlewares/withAuthentication";
import { useAuthenticationUserState } from "../data/authentication/authenticationUserState";

export const ExamplePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cote Certo - Example</title>
      </Head>
      <PageContainer>
        <Header />
        <Container maxWidth="sm">
          <Box my={10}>
            <Typography variant="h4" component="h1" color="textPrimary">
              Next.js with TypeScript / Example
            </Typography>
            <Link href="/" color="secondary">
              Go to the home page
            </Link>
          </Box>
        </Container>
        <Footer />
      </PageContainer>
    </>
  );
};

ExamplePage.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();

  console.log(json);
  console.log("req?.headers", req?.headers);
  console.log("Apollo Client", client.version);

  return {};
};

// WITH AUTH

const Profile: NextPage = () => {
  const { user } = useAuthenticationUserState();

  const { loading } = useQuery(Query, {
    skip: !user.isAuthenticated,
  });

  return (
    <div>
      <Head>
        <title>Cote Certo - Profile</title>
      </Head>

      {loading && <div>Loading...</div>}

      <h1 style={{ color: "black" }}>Profile</h1>
    </div>
  );
};

export default withAuthentication(Profile);

const Query = gql`
  query Query($variable: String) {
    query(variable: $variable) {
      teste
    }
  }
`;
