import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "../Link";

import { Typography, Grid, Divider, Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

export const ProductsReviews: React.FC = () => {
  const list = [
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      Product: "Playstation 5 - Sony / 1TB",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      Product: "Playstation 5 - Sony / 1TB",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      Product: "Playstation 5 - Sony / 1TB",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      Product: "Playstation 5 - Sony / 1TB",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      Product: "Playstation 5 - Sony / 1TB",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      Product: "Playstation 5 - Sony / 1TB",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor console da geração, entrega super rápida.",
      Product: "Playstation 5 - Sony / 1TB",
      rating: 4,
    },
  ];

  return (
    <GridScroll sm={12} item>
      {list.map((item, index) => (
        <GridInputs sm={12} item>
          <GridInformation key={index} container item>
            <Grid sm={6} xs={6} item>
              <GridDateProduct container item>
                <Grid md={6} sm={12} xs={12} item>
                  <Typography variant="inherit" color="textPrimary">
                    {item.date}
                  </Typography>
                </Grid>
                <Grid md={6} sm={12} xs={12} item>
                  <Typography variant="inherit" color="textPrimary">
                    {item.Product}
                  </Typography>
                </Grid>
              </GridDateProduct>
            </Grid>
            <GridRating sm={6} xs={6} item>
              <Rating
                value={item.rating}
                onChange={(event, newValue) => console.log(newValue)}
              />
            </GridRating>
            <GridDivider sm={12} xs={12} item>
              <Box my={1}>
                <Divider light />
              </Box>
            </GridDivider>
            <Grid sm={12} item>
              <Typography variant="subtitle2" color="textPrimary">
                {item.text}
              </Typography>
            </Grid>
          </GridInformation>
        </GridInputs>
      ))}
    </GridScroll>
  );
};

const GridInputs = styled(Grid)`
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
`;

const GridDivider = styled(Grid)`
  padding: 0 0 1rem 0;
`;

const GridDateProduct = styled(Grid)``;

const GridScroll = styled(Grid)`
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
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        padding-left: 1rem;
      }
      ${props.theme.breakpoints.down("xs")} {
        display: flex;
      }
    `}
`;
