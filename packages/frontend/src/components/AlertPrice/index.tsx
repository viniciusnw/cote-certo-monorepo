import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MenuLinksIcons } from "../MenuLinksIcons";
import { Product } from "../Product";
import { constants } from "../../utils";
import { Grid, Container, Box as MuiBox } from "@material-ui/core";


const { ProductEnum } = constants;
const ComparsionProduct = [
  {
    __typename: ProductEnum.Comparison,
    title: "Playstation 5 - Sony / 1TB",
    previousPrice: 6480,
    price: 5799,
    alertPrice: 5800,
    imageUrl: "/assets/mock/products/product-14.png",
    urlRedirect: "",
  },
  {
    __typename: ProductEnum.Comparison,
    title: "Playstation 5 - Sony / 1TB",
    previousPrice: 6480,
    price: 5799,
    alertPrice: 5800,
    imageUrl: "/assets/mock/products/product-13.png",
    urlRedirect: "",
  },
  {
    __typename: ProductEnum.Comparison,
    title: "Playstation 5 - Sony / 1TB",
    previousPrice: 6480,
    price: 5799,
    alertPrice: 5800,
    imageUrl: "/assets/mock/products/product-13.png",
    urlRedirect: "",
  },
];

export const AlertPrice: React.FC = () => {
  return (
    <BoxStyled>
      <Container maxWidth="lg">
        <GridContent container>
          <GridLinks sm={3} xs={12} item spacing={4}>
            <MenuLinksIcons />
          </GridLinks>

          <GridForm sm={9} container item>
            {ComparsionProduct.map((item, idx) => (
              <Product key={idx} {...item} />
            ))}
          </GridForm>
        </GridContent>
      </Container>
    </BoxStyled>
  );
};

const BoxStyled = styled(MuiBox)`
  background-color: ${(props) => props.theme.palette.grey[200]};
  padding-top: 1rem;
  margin-bottom: -20px;
`;

const GridLinks = styled(Grid)`
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
  text-align: left;
  height: 225px;
  ol {
    margin-top: 1rem;
    padding-left: 1rem;
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        height: 270px;
      }
      ${props.theme.breakpoints.down("xs")} {
        margin-bottom: 1rem;
        height: auto;
      }
    `}
`;

const GridForm = styled(Grid)`
  padding: 0 0 0 1rem;
  margin: 0 0 3rem 0;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding-left: 0;
      }
    `}
`;

const GridContent = styled(Grid)`
  padding: 2rem 0 2rem 0;
`;
