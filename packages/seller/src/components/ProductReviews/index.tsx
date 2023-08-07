import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Typography, Grid } from "@material-ui/core";

import { Review } from './../Review'

export const ProductReviews: React.FC = () => {
  const list = [
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      name: "Scorpion",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      name: "Sub-Zero",
      rating: 3,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      name: "Kano",
      rating: 5,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      name: "Milena",
      rating: 5,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      name: "Kitana",
      rating: 5,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      name: "Liu Kang",
      rating: 5,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      name: "Sonya Blade",
      rating: 3,
    },
  ];

  return (
    <React.Fragment>
      <Grid xs={12} item>
        <Typography variant="h5" color="textPrimary">
          Avaliações
        </Typography>
      </Grid>
      <GridScroll xs={12} item>
        {list.map((item, index) => (
          <Review key={index} {...item} />
        ))}
      </GridScroll>
    </React.Fragment>
  );
};

const GridInputs = styled(Grid)`
  border-radius: 6px;
  background-color: ${(props) => props.theme.palette.common.white};
`;

const GridDivider = styled(Grid)`
  padding: 0 0 1rem 0;
`;

const GridScroll = styled(Grid)`
  margin-top: 1rem;
  overflow-y: auto;
  height: 50vh;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        margin-bottom: 1rem;
      }
    `}
`;

const GridRating = styled(Grid)`
  text-align: right;
`;

const GridInformation = styled(Grid)`
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  background-color: ${(props) => props.theme.palette.common.white};
`;
