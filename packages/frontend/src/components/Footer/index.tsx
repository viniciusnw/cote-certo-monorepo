import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Typography, Container as MuiContainer, Box } from "@material-ui/core";

import { Link } from "../Link";

export const Footer: React.FC = () => {
  const sections = [
    {
      items: [
        { name: "Sua privacidade" },
        { name: "Sobre o Cotecerto" },
        { name: "Trabalhe conosco" },
        { name: "Invista no Cotecerto" },
        { name: "Seja parceiro" },
      ],
    },
    {
      items: [
        { name: "Comprar" },
        { name: "Vender" },
        { name: "Solução de problemas" },
        { name: "Segurança" },
      ],
    },
    {
      items: [
        { name: "Twitter" },
        { name: "Facebook" },
        { name: "Instagram" },
        { name: "YouTube" },
      ],
    },
  ];

  return (
    <FooterSection>
      <MuiContainer maxWidth="lg">
        <TopSection>
          <Logo src={"/assets/images/logo.svg"} alt="Logo CoteCerto" />

          {sections.map((sec, secIdx) => (
            <MenuContainer key={`${secIdx}`}>
              {sec.items.map((i, idx) => (
                <Link key={`${i.name + idx}`} href="/">
                  <Typography variant="h5">{i.name}</Typography>
                </Link>
              ))}
            </MenuContainer>
          ))}
        </TopSection>

        <BottomSection>
          <Typography variant="body2" align="center">
            O uso deste site está sujeito aos termos e condições do Termo de Uso
            e Política de privacidade.
          </Typography>
          <Typography variant="body2" align="center">
            ® Cotecerto. Todos os direitos reservados {new Date().getFullYear()}
            .
          </Typography>
        </BottomSection>
      </MuiContainer>
    </FooterSection>
  );
};

const FooterSection = styled.div`
  margin-top: 1rem;
  padding: 3.5rem 0;
  background: linear-gradient(243.18deg, #00C192 0%, #39d064 100%);
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
      }
      ${props.theme.breakpoints.down("xs")} {
        grid-template-columns: 1fr;
      }
    `}
`;

const Logo = styled.img`
  width: 100%;
  max-width: 131px;
`;

const MenuContainer = styled.div`
  display: grid;
  row-gap: 1rem;
`;

const BottomSection = styled.div`
  padding: 1rem;
  padding-top: 4rem;
`;
