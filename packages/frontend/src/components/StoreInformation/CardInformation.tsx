import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "../Link";

import { Typography, Grid, Divider } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

export const CardInformation: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const listBrands = [
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      rating: 4,
    },
    {
      date: "22 de Julho, 2021",
      text: "Melhor loja da região, atendimento muito rápido.",
      rating: 4,
    },
  ];

  const card = [
    {
      title: "Casas Bahia",
      imageUrl: "/assets/mock/products/product-logo-bahia.png",
      number1: "59.291.534/0001",
      number2: "00 0000-0000",
      address: "Av. Tocantins, 3500, Manaus, Amazonas",
    },
  ];
  return (
    <Grid sm={4} item>
      <GridStoreCard container item>
        {card.map((item, index) => (
          <CustomGrid key={index} container item>
            <GridImage sm={4} xs={4} item>
              <img src={item.imageUrl} />
            </GridImage>
            <GridText sm={8} xs={8} item>
              <Grid item>
                <Typography variant="h5" color="textPrimary">
                  {item.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="inherit" color="textPrimary">
                  {item.number1}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="inherit" color="textPrimary">
                  {item.number2}
                </Typography>
              </Grid>
              <GridAdress item>
                <Typography variant="inherit" color="textPrimary">
                  {item.address}
                </Typography>
              </GridAdress>
            </GridText>
          </CustomGrid>
        ))}
      </GridStoreCard>
      <GridScroll item>
        {listBrands.map((item, index) => (
          <GridInformation key={index} container item>
            <Grid sm={6} xs={6} item>
              <Typography variant="inherit" color="textPrimary">
                {item.date}
              </Typography>
            </Grid>
            <GridRating sm={6} xs={6} item>
              <Rating
                value={item.rating}
                onChange={(event, newValue) => console.log(newValue)}
              />
            </GridRating>
            <GridDivider sm={12} xs={12} item>
              <Divider light />
            </GridDivider>
            <Grid sm={12} item>
              <Typography variant="subtitle2" color="textPrimary">
                {item.text}
              </Typography>
            </Grid>
          </GridInformation>
        ))}
      </GridScroll>
    </Grid>
  );
};

const GridDivider = styled(Grid)`
  padding: 0 0 1rem 0;
`;

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

const GridText = styled(Grid)`
  padding: 0 0 0 1.5rem;
`;

const GridAdress = styled(Grid)`
  padding: 1rem 0 0.4rem 0;
`;

const CustomGrid = styled(Grid)`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        display: flex;
        text-align: left;
      }
    `}
`;
const GridRating = styled(Grid)`
  text-align: right;
`;

const GridImage = styled(Grid)`
  text-align: left;
  img {
    ${(props) =>
      css`
        ${props.theme.breakpoints.down("md")} {
          width: 90%;
        }
        ${props.theme.breakpoints.down("xs")} {
          width: 55%;
        }
      `}
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        text-align: center;
      }
    `}
`;

const GridStoreCard = styled(Grid)`
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
  margin-bottom: 2.5rem;
  padding: 1rem;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        display: flex;
      }
    `}
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
