import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ReactPaginate from "react-paginate";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { Link } from "../Link";

import {
  Grid,
  Container,
  Box as MuiBox,
  Typography,
  Button,
  List,
  Box,
} from "@material-ui/core";

export const StoreBrands: React.FC = () => {
  const Brands = [
    {
      imageUrl: "/assets/mock/store-brands/brand-1.png",
      urlRedirect: "http://localhost:3000/loja/1",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-2.png",
      urlRedirect: "http://localhost:3000/loja/2",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-3.png",
      urlRedirect: "http://localhost:3000/loja/3",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-4.png",
      urlRedirect: "http://localhost:3000/loja/4",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-5.png",
      urlRedirect: "http://localhost:3000/loja/5",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-6.png",
      urlRedirect: "http://localhost:3000/loja/6",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-7.png",
      urlRedirect: "http://localhost:3000/loja/7",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-8.png",
      urlRedirect: "http://localhost:3000/loja/8",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-9.png",
      urlRedirect: "http://localhost:3000/loja/9",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-10.png",
      urlRedirect: "http://localhost:3000/loja/10",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-11.png",
      urlRedirect: "http://localhost:3000/loja/11",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-12.png",
      urlRedirect: "http://localhost:3000/loja/12",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-13.png",
      urlRedirect: "http://localhost:3000/loja/13",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-14.png",
      urlRedirect: "http://localhost:3000/loja/14",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-15.png",
      urlRedirect: "http://localhost:3000/loja/15",
    },
    {
      imageUrl: "/assets/mock/store-brands/brand-16.png",
      urlRedirect: "http://localhost:3000/loja/16",
    },
  ];

  const ListInformation = [
    {
      information: "Integração com marketplace",
    },
    {
      information: "Perfil próprio da loja",
    },
    {
      information: "Cadastro de produtos",
    },
  ];

  return (
    <BoxStyled>
      <Container maxWidth="lg">
        <MuiBox my={4}>
          <Typography variant="h3" color="textPrimary">
            Lojas
          </Typography>
        </MuiBox>

        <Grid xs={12} container>
          <Grid xs={12} container item alignItems="center" sm={8}>
            {Brands.map((item, idx) => (
              <GridBrands key={idx} item>
                <Link href={item.urlRedirect}>
                  <ImageProduct src={item.imageUrl} />
                </Link>
              </GridBrands>
            ))}
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
          </Grid>

          <Grid xs={12} item sm={4}>
            <CardContent>
              <Grid container item>
                <GridTitle item>
                  <Typography variant="h3" color="textPrimary">
                    Aumente suas vendas com o{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        textDecorationColor: "#39D064",
                      }}
                    >
                      Cotecerto!
                    </span>
                  </Typography>
                </GridTitle>
                <GridStyled xs={12} item>
                  <Typography variant="subtitle2" color="textPrimary">
                    Você lojista que deseja aumentar suas vendas e receber mais
                    visistas, cadastre agora sua loja e obtenha os benefícios
                  </Typography>
                </GridStyled>
                <ListGrid xs={12} item>
                  <List>
                    {ListInformation.map((i, index) => (
                      <ol key={index}>
                        <GridBulletPoints container item spacing={2}>
                          <Grid sm={1} xs={1} item>
                            <ListItemIcon>
                              <Brightness1Icon fontSize="small" />
                            </ListItemIcon>
                          </Grid>
                          <Grid sm={11} xs={11} item>
                            <Typography variant="inherit" color="textPrimary">
                              {i.information}
                            </Typography>
                          </Grid>
                        </GridBulletPoints>
                      </ol>
                    ))}
                  </List>
                </ListGrid>
                <GridStyled xs={12} item>
                  <Button size="large" variant="contained" color="primary">
                    <Typography variant="body2">
                      <b>Começar agora</b>
                    </Typography>
                  </Button>
                </GridStyled>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </BoxStyled>
  );
};

const BoxStyled = styled(MuiBox)`
  padding-top: 1rem;
  background: ${(props) => props.theme.palette.grey[200]};
`;

const GridBrands = styled(Grid)`
  width: 165px;
  height: 100px;
  text-align: center;
  border-radius: 6px;
  margin: 0 2rem 2rem 0;
  background-color: ${(props) => props.theme.palette.common.white};
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        width: 200px;
      }
      ${props.theme.breakpoints.down("xs")} {
        width: 130px;
      }
    `}
`;

const ImageProduct = styled.img`
  top: 50%;
  position: relative;
  transform: translateY(-50%);
`;

const GridBulletPoints = styled(Grid)`
  .MuiSvgIcon-root {
    height: 10px;
    width: 8px;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

const CardContent = styled.div`
  border-radius: 6px;
  text-align: center;
  background-color: ${(props) => props.theme.palette.common.white};
  border: 2px solid ${(props) => props.theme.palette.primary.main};
`;

const GridStyled = styled(Grid)`
  padding: 1rem;
`;

const PaginateContainer = styled(Box)`
  display: flex;
  padding-bottom: 2rem;
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

const GridTitle = styled(Grid)`
  padding: 2rem;
`;

const ListGrid = styled(Grid)`
  text-align: left;
  ol {
    margin-top: 1rem;
    padding-left: 2rem;
  }
`;
