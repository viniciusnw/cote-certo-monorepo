import React from "react";
import styled from "@emotion/styled";
import { Typography, Container, Box as MuiBox } from "@material-ui/core";

import { Product } from "../../Product";
import { constants } from "../../../utils";

export const ProductHorizontalList: React.FC = () => {
  const { ProductEnum } = constants;
  const Products = [
    {
      __typename: ProductEnum.Horizontal,
      imageUrl: "/assets/mock/products/product-13.png",
      urlRedirect: "/",
      price: 6749,
      storeLogo: "/assets/mock/products/product-logo-sony.png",
      installment: {
        value: 512.41,
        installment: 12,
        interestRate: true,
      },
      shipping: {
        minDays: 5,
        value: 0,
      },
      store: {
        type: "Loja física",
        isOpen: true,
        district: "Jardim Paulista",
        distance: 16,
      },
      rating: 5,
    },
    {
      __typename: ProductEnum.Horizontal,
      imageUrl: "/assets/mock/products/product-14.png",
      urlRedirect: "/",
      price: 7112.99,
      storeLogo: "/assets/mock/products/product-logo-bahia.png",
      installment: {
        value: 512.41,
        installment: 12,
        interestRate: true,
      },
      shipping: {
        minDays: 5,
        value: 0,
      },
      store: {
        type: "Loja física",
        isOpen: true,
        district: "Jardim Paulista",
        distance: 16,
      },
      rating: 3,
    },
  ];

  return (
    <BoxStyled>
      <Container maxWidth="lg">
        <BoxTypography>
          <Typography variant="h2" color="textPrimary">
            Compare preços em{" "}
            <Typography variant="inherit" color="primary">
              {Products.length} lojas confiáveis
            </Typography>
          </Typography>
        </BoxTypography>

        {Products.map((item, idx) => (
          <Product key={idx} {...item} />
        ))}
      </Container>
    </BoxStyled>
  );
};

const BoxStyled = styled(MuiBox)`
  padding-bottom: 2rem;
  background: ${(props) => props.theme.palette.grey[200]};
`;

const BoxTypography = styled(MuiBox)`
  display: flex;
  justify-content: left;
  padding: 2.5rem 0 2rem;
`;
