import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Typography, Container, Box as MuiBox } from "@material-ui/core";

export const Features: React.FC = () => {
  const features = [
    {
      icon: "/assets/images/shop.png",
      line1: "Para empreendedores",
      line2: "Postagem de produtos gratis",
    },
    {
      icon: "/assets/images/account_balance_wallet.png",
      line1: "Consumidores escolhem os produtos",
      line2: "mais baratos, nas melhores lojas",
    },
    {
      icon: "/assets/images/desktop_light.png",
      line1: "Muuuita tecnologia",
      line2: "Algoritmo para melhores ofertas",
    },
  ];

  const RenderComponent = (props: any) => (
    <>
      <Feature>
        <ImgContainer>
          <img src={props.icon} />
        </ImgContainer>

        <TypographyContainer>
          <Typography align="left" variant="caption" color="textPrimary">
            {props.line1}
          </Typography>{" "}
          <Typography align="left" variant="caption" color="textPrimary">
            {props.line2}
          </Typography>
        </TypographyContainer>
      </Feature>
      {props.idx != 2 && <Divider />}
    </>
  );

  return (
    <>
      <Strip>
        <Typography align="center" variant="body2">
          Crie uma alerta de preço e compre pelo <b> menor </b> preço
        </Typography>
      </Strip>
      <Container maxWidth="md">
        <Box my={4}>
          {features.map((i, idx) => (
            <RenderComponent key={idx} idx={idx} {...i} />
          ))}
        </Box>
      </Container>
    </>
  );
};

const Strip = styled.div`
  padding: 0.8rem;
  white-space: nowrap;
  background-color: ${(props) => props.theme.palette.divider};

  b {
    color: ${(props) => props.theme.palette.primary.main};
  }

  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        white-space: normal;
      }
    `}
`;

const Box = styled(MuiBox)`
  gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 2px 1fr 2px 1fr;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        gap: 0;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 0px 1fr 0px 1fr;
      }
    `}
`;

const Feature = styled.div`
  flex: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  text-align: center;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        text-align: center;
      }
      ${props.theme.breakpoints.down("xs")} {
        text-align: right;
      }
    `}
`;

const TypographyContainer = styled.div`
  margin-left: 1rem;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        p {
          text-align: center;
        }
      }
      ${props.theme.breakpoints.down("xs")} {
        max-width: 50%;
        p {
          text-align: left;
        }
      }
    `}
`;

const Divider = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.palette.primary.main};
`;
