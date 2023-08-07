import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Typography, Container, Box, Paper, Button } from "@material-ui/core";

import { Link } from "../Link";
import { Product } from "../Product";
import { constants, formatCurrency } from "../../utils";

export const BannersSuggests: React.FC = () => {
  const banners = [
    {
      title: "MELHOR PREÇO DO MERCADO",
      subtitle: "R$ 50 De desconto na primeira compra",
      urlRedirect: "/pagina?name=desconto-50",
      imageUrl: "/assets/mock/suggests/banner-1.png",
      buttonText: "Veja mais",
    },
    {
      title: "ANUNCIE GRÁTIS",
      subtitle: "Venda seus produtos mais rápido",
      urlRedirect: "/pagina?name=anuncie-gratis",
      imageUrl: "/assets/mock/suggests/banner-2.png",
      buttonText: "Veja mais",
    },
  ];

  return (
    <Box my={9}>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h3" color="textPrimary">
            Você pode se interessar
          </Typography>
        </Box>

        <BannerContainer>
          {banners.map((b, idx) => (
            <Banner key={idx} imageurl={b.imageUrl} elevation={3}>
              <BannerContent>
                <Box my={2}>
                  <Typography variant="caption" color="textPrimary">
                    {b.title}
                  </Typography>
                </Box>

                <Typography variant="h3" color="textPrimary">
                  {b.subtitle}
                </Typography>

                <Box my={2}>
                  <Button size="large" variant="contained" color="primary">
                    <Typography variant="body2">
                      <b>{b.buttonText}</b>
                    </Typography>
                  </Button>
                </Box>
              </BannerContent>
            </Banner>
          ))}
        </BannerContainer>
      </Container>
    </Box>
  );
};

const BannerContainer = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(1, 1fr);
      }
    `}
`;

type BannerProps = {
  imageurl: string;
};

const Banner = styled(Paper)<BannerProps>`
  gap: 1rem;
  display: grid;
  padding: 0 3rem;
  min-height: 270px;
  border-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  grid-template-columns: 2fr 1fr;
  background-position: center 10px;
  background-image: url(${(props) => props.imageurl});
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        grid-template-columns: 1fr 1fr;
      }
      ${props.theme.breakpoints.down("xs")} {
        grid-template-columns: 2fr 1fr;
      }
    `}
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
