import React from "react";
import styled from "@emotion/styled";
import { Grid as MuiGrid, Container, Box } from "@material-ui/core";
import { css } from "@emotion/react";
import { ProductDetailsList } from "./ProductDetailsList";

export const ProductDetails: React.FC = () => {
  const BackgroundImages = [
    "/assets/mock/products-details/cartao-luiza.png",
    "/assets/mock/products-details/apple.png",
    "/assets/mock/products-details/samsung.png"
  ]

  return (
    <Box mt={11}>
      <Container maxWidth="lg">
        <MuiGrid container spacing={3}>
          <MuiGrid item xs={12} md={6}>
            <ProductDetailsList />
          </MuiGrid>
          <MuiGrid xs={12} md={6} item>
            <CustomGrid container spacing={2}>
              <MuiGrid item xs={6}>
                <ImageContentApple/>
              </MuiGrid>
              <MuiGrid item xs={6}>
                <ImageContentSamsung />
              </MuiGrid>
              <MuiGrid item xs={12}>
                <ImageContentCartao />
              </MuiGrid>
            </CustomGrid>
          </MuiGrid>
        </MuiGrid>
      </Container>
    </Box>
  );
};

const CustomGrid = styled(MuiGrid)`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding: 0px;
        text-align: center;
        justify-content: center;
        grid-template-columns: repeat(1, 1fr);
      }
    `};
`;

const ImageContentCartao = styled.div`
  height: 245px;
  border-radius: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("/assets/mock/products-details/cartao-luiza.png");
`;

const ImageContentApple = styled.div`
  height: 245px;
  border-radius: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("/assets/mock/products-details/apple.png");
`;

const ImageContentSamsung = styled.div`
  height: 245px;
  border-radius: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("/assets/mock/products-details/samsung.png");
`;
