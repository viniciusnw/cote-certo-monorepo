import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Typography, Container, Box } from "@material-ui/core";

import { Link } from "../../Link";
import { Product } from "../../Product";
import { constants, formatCurrency } from "../../../utils";

const { ProductEnum } = constants;

export const BestProductsPriceList: React.FC = () => {
  const maxValue = 2000;
  const products = [
    {
      __typename: ProductEnum.Half,
      minPrice: 343.9,
      imageUrl: "/assets/mock/products/product-9.png",
      urlRedirect:
        "/produto?name=sony-playstation-5-825gb-standard-cor-branco-e-preto",
      title: "Tênis Nike Court Vision Mid Masculino",
    },
    {
      __typename: ProductEnum.Half,
      minPrice: 319.9,
      imageUrl: "/assets/mock/products/product-11.png",
      urlRedirect: "/produto?name=apple-iphone-11-128-gb-preto",
      title: "Fritadeira elétricaGourmet Air Fryer 4 L 4L preta 127V",
    },
    {
      __typename: ProductEnum.Half,
      minPrice: 1719.0,
      imageUrl: "/assets/mock/products/product-12.png",
      urlRedirect: "/produto?name=microondas-philco-pme25bm-prata-25l-220v",
      title: "Ar condicionado LG Dual split frio 9000 BTU branco",
    },
    {
      __typename: ProductEnum.Half,
      minPrice: 1599.0,
      imageUrl: "/assets/mock/products/product-8.png",
      urlRedirect: "/produto?name=microondas-philco-pme25bm-prata-25l-220v",
      title: "Máquina de lavar automática Consul CWH12A branca 12kg",
    },
    {
      __typename: ProductEnum.Half,
      minPrice: 1589.0,
      imageUrl: "/assets/mock/products/product-7.png",
      urlRedirect: "/produto?name=microondas-philco-pme25bm-prata-25l-220v",
      title: "Máquina de lavar automática Electrolux LAC13 branca 13kg",
    },
    {
      __typename: ProductEnum.Half,
      minPrice: 139.9,
      imageUrl: "/assets/mock/products/product-10.png",
      urlRedirect: "/produto?name=microondas-philco-pme25bm-prata-25l-220v",
      title: "Cafeteira Mondial C-32 semi automática preta de filtro 110V",
    },
  ];

  return (
    <Box my={9}>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h3" color="textPrimary">
            Melhores ofertas até {formatCurrency(maxValue)}
          </Typography>
        </Box>

        <ProductContainer>
          {products.map((item, idx) => (
            <Product key={idx} {...item} />
          ))}
        </ProductContainer>
      </Container>
    </Box>
  );
};

const ProductContainer = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        grid-template-columns: repeat(3, 1fr);
      }
      ${props.theme.breakpoints.down("xs")} {
        grid-template-columns: repeat(2, 1fr);
      }
    `}
`;
