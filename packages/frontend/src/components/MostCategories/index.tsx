import React from "react";
import styled from "@emotion/styled";
import {
  Typography,
  Box as MuiBox,
  Container as MuiContainer,
} from "@material-ui/core";
import { css } from "@emotion/react";

import { Link } from "../Link";

export const MostCategories: React.FC = () => {
  const mostCategories = [
    {
      imageUrl: "/assets/mock/categoria-notebook.png",
      title: "Notebook",
      urlRedirect: "/categoria?name=notebooks",
      subtitle:
        "Ofertas de Notebooks das melhores marcas e com ótimos descontos",
    },
    {
      imageUrl: "/assets/mock/categoria-lavanderia.png",
      title: "Lavanderia",
      urlRedirect: "/categoria?name=lavanderia",
      subtitle:
        "Ofertas de Notebooks das melhores marcas e com ótimos descontos",
    },
    {
      imageUrl: "/assets/mock/categoria-brinquedos.png",
      title: "Notebook",
      urlRedirect: "/categoria?name=brinquedos",
      subtitle:
        "Ofertas de Notebooks das melhores marcas e com ótimos descontos",
    },
    {
      imageUrl: "/assets/mock/categoria-cozinha.png",
      title: "Cozinha",
      urlRedirect: "/categoria?name=cozinha",
      subtitle:
        "Ofertas de Notebooks das melhores marcas e com ótimos descontos",
    },
  ];
  return (
    <MuiBox mt={9}>
      <MuiContainer maxWidth="lg">
        <MuiBox my={4}>
          <Typography variant="h3" color="textPrimary">
            Categorias populares
          </Typography>
        </MuiBox>
        <ItensContent>
          {mostCategories.map((item, index) => (
            <CategoryItem key={index}>
              <Link href={item.urlRedirect}>
                <BoxDiv>
                  <BoxImage>
                    <img src={item.imageUrl} alt={item.title} />
                  </BoxImage>
                  <BoxText>
                    <Typography color="primary" variant="h5">
                      {item.title}
                    </Typography>
                    <Typography color="textPrimary" variant="inherit">
                      {item.subtitle}
                    </Typography>
                  </BoxText>
                </BoxDiv>
              </Link>
            </CategoryItem>
          ))}
        </ItensContent>
      </MuiContainer>
    </MuiBox>
  );
};

const ItensContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
      }
      ${props.theme.breakpoints.down("xs")} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        row-gap: 1rem;
      }
    `};
`;

const CategoryItem = styled.div``;

const BoxImage = styled(MuiBox)`
  margin: 0 20px;
  border-radius: 10px;
  background-color: #fff;
  img {
    border-radius: 10px;
  }
`;

const BoxDiv = styled(MuiBox)`
  display: flex;
  flex-wrap: nowrap;
`;

const BoxText = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
