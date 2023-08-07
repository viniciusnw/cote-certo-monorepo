import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Container, Grid } from "@material-ui/core";
import { useLocation } from 'react-router-dom';

import { MenuLinksIcons } from "./../../components/MenuLinksIcons";
import { Main } from "./../../components/PageContainer";
import { Header } from "./../../components/Header";
import { Footer } from "./../../components/Footer";
import { ProductForm } from "./../../components/ProductForm";
import { ProductReviews } from "./../../components/ProductReviews";

const NewAndEditProduct: React.FC<any> = () => {
  let location = useLocation();

  console.log(location)
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
              <ProductForm />
              <br />
              <ProductReviews />
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

export default NewAndEditProduct;
