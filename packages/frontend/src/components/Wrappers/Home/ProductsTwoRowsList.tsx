import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Typography, Container, Box } from "@material-ui/core";

import { Link } from "../../Link";
import { Product } from "./../../Product";
import { constants } from "./../../../utils";

const { ProductEnum } = constants;

export const ProductsTwoRowsList: React.FC = () => {
  const productsLine1 = [
    {
      __typename: ProductEnum.Full,
      stores: 14,
      minPrice: 6749.1,
      category: "Videogames",
      imageUrl: "/assets/mock/products/product-4.png",
      urlRedirect:
        "/produto?name=sony-playstation-5-825gb-standard-cor-branco-e-preto",
      title: "Sony PlayStation 5 825GB Standard cor branco e preto",
    },
    {
      __typename: ProductEnum.Full,
      stores: 10,
      minPrice: 4999,
      category: "Videogames",
      imageUrl: "/assets/mock/products/product-1.png",
      urlRedirect: "/produto?name=apple-iphone-11-128-gb-preto",
      title: "Apple iPhone 11 (128 GB) - Preto",
    },
    {
      __typename: ProductEnum.Full,
      stores: 14,
      minPrice: 1304.91,
      category: "Videogames",
      imageUrl: "/assets/mock/products/product-2.png",
      urlRedirect: "/produto?name=microondas-philco-pme25bm-prata-25l-220v",
      title: "Microondas Philco PME25BM prata 25L 220V",
    },
  ];

  const productsLine2 = [
    {
      __typename: ProductEnum.Full,
      stores: 4,
      minPrice: 4599,
      category: "Televisores",
      imageUrl: "/assets/mock/products/product-3.png",
      urlRedirect:
        "/produto?name=smart-tv-60-samsung-crystal-uhd-4k-60au8000-alexa-built-in",
      title: "Smart Tv 60 Samsung Crystal Uhd 4k 60au8000 Alexa Built In",
    },
    {
      __typename: ProductEnum.Full,
      stores: 3,
      minPrice: 6188,
      category: "Videogames",
      imageUrl: "/assets/mock/products/product-5.png",
      urlRedirect:
        "/produto?name=geladeira-frost-free-brastemp-brO80a-freezer-540l-127v",
      title: "Geladeira frost free Brastemp BRO80A freezer 540L 127V",
    },
    {
      __typename: ProductEnum.Full,
      stores: 4,
      minPrice: 6749.1,
      category: "Videogames",
      imageUrl: "/assets/mock/products/product-6.png",
      urlRedirect:
        "/produto?name=smartphone-samsung-galaxy-s21ultra-5g-prata-256gb",
      title: "Smartphone Samsung Galaxy S21Ultra 5G Prata 256GB",
    },
  ];

  const banners = [
    {
      imageUrl: "/assets/mock/products/banner-1.png",
      urlRedirect: "/categoria?marca=samsung&product=galaxy-buds-pro",
    },
    {
      imageUrl: "/assets/mock/products/banner-2.png",
      urlRedirect: "/categoria?marca=apple&product=iphone-11",
    },
  ];

  return (
    <Box my={8}>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h3" color="textPrimary">
            Ofertas mais próximas de você
          </Typography>
        </Box>

        <ProductLine>
          {productsLine1.map((item, idx) => (
            <Product key={idx} {...item} />
          ))}
          <Banner size="cover" imageUrl={banners[0].imageUrl}>
            <LinkStyled children={""} href={banners[0].urlRedirect} />
          </Banner>
        </ProductLine>

        <Box my={4}>
          <ProductLine>
            <Banner size="cover" imageUrl={banners[1].imageUrl}>
              <LinkStyled children={""} href={banners[1].urlRedirect} />
            </Banner>
            {productsLine2.map((item, idx) => (
              <Product key={idx} {...item} />
            ))}
          </ProductLine>
        </Box>
      </Container>
    </Box>
  );
};

const ProductLine = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        grid-template-columns: repeat(3, 1fr);
      }
      ${props.theme.breakpoints.down("xs")} {
        grid-template-columns: repeat(1, 1fr);
      }
    `}
`;

type BannerProps = {
  imageUrl: string;
  size: "cover" | "contain";
};

const Banner = styled.div<BannerProps>`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 1rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: ${(props) => props.size};
  background-image: url(${(props) => props.imageUrl});
`;

const LinkStyled = styled(Link)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
`;
