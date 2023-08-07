import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link, Container as MuiContainer } from "@material-ui/core";

import logoResponsive from './../../assets/images/logo-responsive.svg'
import logo from './../../assets/images/logo.svg'
import { LoggedMenu } from './../LoggedMenu'

export const Header: React.FC = () => {

  return (
    <Container>
      <Content maxWidth="lg" >
        <LogoContainer href="/">
          <LogoResponsive
            src={logoResponsive}
            alt="logo-responsive"
          />
          <Logo src={logo} alt="logo" />
        </LogoContainer>

        <LoggedMenu />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 1.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(243.18deg, #00C192 0%, #39d064 100%);
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        margin-bottom: 1rem;
      }
    `}
`;

const Content = styled(MuiContainer)`
  gap: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        gap: 1rem;
      }
      ${props.theme.breakpoints.down("xs")} {
        padding: 1rem;
        flex-wrap: wrap;
        justify-content: center;
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