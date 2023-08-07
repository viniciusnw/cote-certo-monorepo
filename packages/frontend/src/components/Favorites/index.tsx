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
import { Product } from "./Product";

const { ProductEnum } = constants;

const Products = [
  {
    __typename: ProductEnum.Favorites,
    imageUrl: "/assets/mock/products/product-13.png",
    urlRedirect:
      "/produto?name=sony-playstation-5-825gb-standard-cor-branco-e-preto",
    title: "Sony PlayStation 5 825GB Standard cor branco e preto",
    price: 6749,
    installment: {
      value: 512.41,
      installment: 12,
      interestRate: true,
    },
  },
  {
    __typename: ProductEnum.Favorites,
    imageUrl: "/assets/mock/products/product-14.png",
    urlRedirect:
      "/produto?name=sony-playstation-5-825gb-standard-cor-branco-e-preto",
    title: "Sony PlayStation 5 825GB Standard cor branco e preto",
    price: 7112.99,
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

export const Favorites: React.FC<Props> = ({ isOpen, setAsOpen }) => {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      console.log(open);
      setAsOpen(open);
    };

  return (
    <>
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
                <b>Meus Favoritos</b>
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <Container>
          <Title>
            <Typography variant="h4" color="textPrimary">
              Meus Favoritos
            </Typography>
          </Title>

          <ProductsContainer>
            {Products.map((product, idx) => (
              <Product key={idx} {...product} />
            ))}
          </ProductsContainer>
        </Container>
      </Drawer>
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
`;
