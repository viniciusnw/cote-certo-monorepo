import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Typography, Grid } from "@material-ui/core";

import { Review } from './../Review'

export const StoreReviews: React.FC = () => {
  const list = [
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      name: "Scorpion",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      name: "Sub-Zero",
      rating: 3,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      name: "Kano",
      rating: 5,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      name: "Milena",
      rating: 5,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      name: "Kitana",
      rating: 5,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      name: "Liu Kang",
      rating: 5,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      name: "Sonya Blade",
      rating: 3,
    },
  ];

  return (
    <React.Fragment>
      <Grid xs={12} item>
        <Typography variant="h3" color="textPrimary">
          Avaliação da loja
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

const GridScroll = styled(Grid)`
  margin-top: 1rem;
  overflow-y: auto;
  height: 70vh;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        margin-bottom: 1rem;
      }
    `}
`;