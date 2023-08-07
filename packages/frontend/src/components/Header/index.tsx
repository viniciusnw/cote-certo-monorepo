import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Menu } from "./Menu";
import { Link } from "./../Link";
import { SearchBar } from "../SearchBar";

export const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer href="/">
        <LogoResponsive
          src={"/assets/images/logo-responsive.svg"}
          alt="logo-responsive"
        />
        <Logo src={"/assets/images/logo.svg"} alt="logo" />
      </LogoContainer>

      <SearchBarMenuContainer>
        <SearchBar />
        <Menu />
      </SearchBarMenuContainer>
    </Container>
  );
};

const Container = styled.div`
  gap: 10%;
  display: grid;
  padding: 2rem;
  grid-template-columns: min-content 1fr;
  background: linear-gradient(243.18deg, #00C192 0%, #39d064 100%);
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        gap: 1rem;
        grid-template-columns: auto 1fr;
      }
      ${props.theme.breakpoints.down("xs")} {
        padding: 1rem;
        grid-template-columns: none;
        grid-template-rows: 1fr auto;
      }
    `}
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoResponsive = styled.img`
  ${(props) =>
    css`
      ${props.theme.breakpoints.up("md")} {
        display: none;
      }
    `}
`;

const Logo = styled.img`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        display: none;
      }
    `}
`;

const SearchBarMenuContainer = styled.div`
  gap: 10%;
  display: grid;
  grid-template-columns: auto min-content;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        gap: 1rem;
      }
      ${props.theme.breakpoints.down("xs")} {
        gap: 0;
      }
    `}
`;
