import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MenuLinks } from "../MenuLinks";
import { Accordeon } from "./Accordeon";
import {
  Grid,
  Container,
  Box as MuiBox,
  Typography,
} from "@material-ui/core";

export const CommonQuestions: React.FC = () => {
  return (
    <BoxStyled>
      <Container maxWidth="lg">
        <GridContent container>
          <GridLinks sm={3} xs={12} item>
            <MenuLinks />
          </GridLinks>
          <GridForm sm={9}  item >
            <Grid sm={12} item>
              <Typography variant="h3" color="textPrimary">
                Dúvidas frequentes
              </Typography>
            </Grid>
            <Accordeon />
          </GridForm>
        </GridContent>
      </Container>
    </BoxStyled>
  );
};

const BoxStyled = styled(MuiBox)`
  background-color: ${(props) => props.theme.palette.grey[200]};
  padding-top: 1rem;
  margin-bottom: -20px;
`;

const GridLinks = styled(Grid)`
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
  text-align: left;
  height: 255px;
  ol {
    margin-top: 1rem;
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        height: 290px;
      }
      ${props.theme.breakpoints.down("xs")} {
        margin-bottom: 2rem;
        height: auto;
      }
    `}
`;

const GridForm = styled(Grid)`
  padding: 0 0 0 3rem;
  margin: 0 0 2rem 0;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding-left: 0;
      }
    `}
`;

const GridContent = styled(Grid)`
  padding: 2rem 0 2rem 0;
`;
