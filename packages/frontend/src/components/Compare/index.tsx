import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Typography,
  Drawer,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Grid,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

import { constants } from "../../utils";
import { Product, Divider } from "./Product";

const { ProductEnum } = constants;

const Products = [
  {
    __typename: ProductEnum.Compare,
    imageUrl: "/assets/mock/products/product-13.png",
    urlRedirect:
      "/produto?name=sony-playstation-5-825gb-standard-cor-branco-e-preto",
    title: "Sony PlayStation 5 825GB Standard cor branco e preto",
    price: 6749,
    shipping: {
      minDays: 5,
      value: 0,
    },
    installment: {
      value: 512.41,
      installment: 12,
      interestRate: true,
    },
  },
  {
    __typename: ProductEnum.Compare,
    imageUrl: "/assets/mock/products/product-14.png",
    urlRedirect:
      "/produto?name=sony-playstation-5-825gb-standard-cor-branco-e-preto",
    title: "Sony PlayStation 5 825GB Standard cor branco e preto",
    price: 7112.99,
    shipping: {
      minDays: 2,
      value: 10.5,
    },
    installment: {
      value: 512.41,
      installment: 12,
      interestRate: true,
    },
  },
];

type Props = {
  isOpen: boolean;
  setAsOpen: (open: boolean) => void;
};

export const Compare: React.FC<Props> = ({ isOpen, setAsOpen }) => {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setAsOpen(open);
    };

  return (
    <>
      <React.Fragment>
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
          <AppBar>
            <Toolbar>
              <IconButton
                type="button"
                edge="start"
                color="default"
                onClick={toggleDrawer(false)}
              >
                <CloseIcon />
              </IconButton>
              <Grid container>
                <Typography variant="h2">
                  <b>Comparar produtos</b>
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>

          <Container>
            <Title>
              <Typography variant="h4" color="textPrimary">
                Comparar produtos
              </Typography>
            </Title>

            <ProductsContainer>
              <ProductsTableHeader>
                <EmptyGrid />
                <Typography variant="body2" color="textPrimary" align="center">
                  <b>Preço hoje</b>
                </Typography>
                <Typography variant="body2" color="textPrimary" align="center">
                  <b>Preço 40 dias</b>
                </Typography>
                <Typography variant="body2" color="textPrimary" align="center">
                  <b>Frete grátis</b>
                </Typography>
                <EmptyGrid2 />
                <Divider />
              </ProductsTableHeader>

              {Products.map((product, idx) => (
                <Product key={idx} {...product} />
              ))}
            </ProductsContainer>
          </Container>
        </Drawer>
      </React.Fragment>
    </>
  );
};

const Container = styled.div`
  padding: 1rem 0;
`;

const AppBar = styled(MuiAppBar)`
  position: initial;
  background: linear-gradient(243.18deg, #00C192 0%, #39d064 100%);
  ${(props) =>
    css`
      ${props.theme.breakpoints.up("md")} {
        display: none;
      }
    `}
`;

const Title = styled.div`
  padding: 1rem 1.8rem 0 1.8rem;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        display: none;
      }
    `}
`;

const ProductsContainer = styled.div`
  overflow: auto;
  padding: 2rem 0 0 0;
`;

const ProductsTableHeader = styled.div`
  gap: 1rem;
  display: grid;
  padding: 1rem 0;
  position: relative;
  padding: 1rem 1.6rem;
  grid-template-columns: min-content 1fr 1fr 1fr min-content;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        gap: 0.5rem;
        padding: 1rem .1rem;
      }
    `}
`;

const EmptyGrid = styled.div`
  width: 136px;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        width: 80px;
      }
    `}
`;

const EmptyGrid2 = styled.div`
  width: 44px;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        display: none;
      }
    `}
`;
