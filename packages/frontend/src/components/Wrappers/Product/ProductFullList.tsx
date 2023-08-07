import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ReactPaginate from "react-paginate";
import { Typography, Container, Box } from "@material-ui/core";

import { Link } from "../../Link";
import { Spaces } from "../../PageContainer";
import { ProductFiltersVertical } from "../../ProductFiltersVertical";
import { ProductFiltersHorizontal } from "../../ProductFiltersHorizontal";
import { ProductListHeader } from "../../ProductListHeader";
import { Product } from "../../Product";
import { constants } from "../../../utils";

export const ProductFullList: React.FC = () => {
  const { ProductEnum } = constants;
  const Products = [
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

  return (
    <Box>
      <Container maxWidth="lg">
        <Breadcrumb my={3}>
          <Typography variant="body2" color="textSecondary">
            <Link color="textSecondary" href="/" children="Home" />
            <Spaces size={2} /> {">"} <Spaces size={2} />
            <Link color="textSecondary" href="/" children="Smart TV" />
            <Spaces size={2} /> {">"} <Spaces size={2} />
            <Link color="textSecondary" href="/" children="Samsung" />
            <Spaces size={2} /> {">"} <Spaces size={2} />
            <Link color="textSecondary" href="/" children="HD" />
          </Typography>
        </Breadcrumb>

        <ProductsContainer>
          <ProductFilterContainer>
            <ProductFiltersVertical />
          </ProductFilterContainer>

          <div>
            <ProductListHeader />

            <ProductFilterContainer>
              <ProductFiltersHorizontal />
            </ProductFilterContainer>

            <ProductListContainer>
              {Products.map((item, idx) => (
                <Product key={idx} {...item} />
              ))}
            </ProductListContainer>

            <PaginateContainer my={5}>
              <ReactPaginate
                pageCount={500}
                breakLabel={"..."}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                nextLabel={"Seguinte >"}
                activeClassName={"active"}
                breakClassName={"break-me"}
                previousLabel={"< Anterior"}
                containerClassName={"pagination"}
                onPageChange={(onPageChange) => console.log(onPageChange)}
              />
            </PaginateContainer>
          </div>
        </ProductsContainer>
      </Container>
    </Box>
  );
};

const PaginateContainer = styled(Box)`
  display: flex;
  justify-content: center;

  .pagination {
    margin: 0;
    padding: 0;
    display: inline-block;
    ${(props) =>
      css`
        ${props.theme.breakpoints.down("sm")} {
          gap: 0.5rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}
  }

  .pagination li {
    height: 36px;
    margin: 0 2.5px;
    cursor: pointer;
    border-radius: 10px;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    background: ${(props) => props.theme.palette.grey[200]};
    a {
      padding-left: 1rem;
      padding-right: 1rem;
      color: ${(props) => props.theme.palette.grey[700]};
    }
    &.active {
      background: ${(props) => props.theme.palette.primary.main};

      a {
        color: ${(props) => props.theme.palette.common.white};
      }
    }
  }
`;

const ProductFilterContainer = styled.div`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        display: none;
      }
    `}
`;

const Breadcrumb = styled(Box)``;

const ProductsContainer = styled.div`
  gap: 1.6rem;
  display: grid;
  grid-template-columns: auto 1fr;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        grid-template-columns: 1fr;
      }
    `}
`;

const ProductListContainer = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        margin-top: 1rem;
        grid-template-columns: repeat(3, 1fr);
      }
      ${props.theme.breakpoints.down("xs")} {
        grid-template-columns: repeat(2, 1fr);
      }
    `}
`;
