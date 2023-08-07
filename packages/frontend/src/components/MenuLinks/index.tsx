import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "../Link";
import { Typography, List } from "@material-ui/core";

export const MenuLinks: React.FC = () => {
  const list = [
    {
      information: "Sobre o Cotecerto",
      urlRedirect: "",
    },
    {
      information: "Sua Privacidade",
      urlRedirect: "",
    },
    {
      information: "Seja Parceiro",
      urlRedirect: "",
    },
    {
      information: "Dúvidas Frequentes",
      urlRedirect: "",
    },
    {
      information: "Termos de uso",
      urlRedirect: "",
    },
    {
      information: "Fale Conosco",
      urlRedirect: "",
    },
  ];

  return (
    <ListLinks>
      {list.map((i, index) => (
        <Link href={i.urlRedirect}>
          <ol key={index.toString() + i.information}>
            <Typography variant="inherit" color="textPrimary">
              {i.information}
            </Typography>
          </ol>
        </Link>
      ))}
    </ListLinks>
  );
};

const ListLinks = styled(List)`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 2rem;
      }
    `}
`;
