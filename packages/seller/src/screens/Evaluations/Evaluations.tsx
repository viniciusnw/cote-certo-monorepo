import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Grid, Typography, Box } from "@material-ui/core";

import { MenuLinksIcons } from "./../../components/MenuLinksIcons";
import { Main } from "./../../components/PageContainer";
import { Header } from "./../../components/Header";
import { Footer } from "./../../components/Footer";
import { StoreReviews } from "./../../components/StoreReviews";


const Evaluations = () => {

  return (
    <>
      <Header />

      <Main>
        <Container maxWidth="lg">
          <Grid container>
            <Grid sm={3} xs={12} item>
              <MenuLinksIcons />
            </Grid>

            <GridContent sm={9} item>
              <StoreReviews />
            </GridContent>
          </Grid>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

const GridContent = styled(Grid)`
  padding-left: 3rem;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding-left: 0rem;
      }
    `}
`;

export default Evaluations;
