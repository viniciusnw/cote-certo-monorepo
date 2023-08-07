import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MenuLinksIcons } from "../MenuLinksIcons";
import { StoreReviews } from "./StoreReviews";

import { Grid, Container, Box as MuiBox, Typography } from "@material-ui/core";


export const StoreEvaluation: React.FC = () => {
  return (
    <BoxStyled>
      <Container maxWidth="lg">
        <GridContent container >
          <GridLinks sm={3} xs={12} item>
            <MenuLinksIcons />
          </GridLinks>
          <GridForm sm={9} container spacing={4}>
            <Grid sm={12} item>
              <Typography variant="h3" color="textPrimary">
                Avaliação em lojas
              </Typography>
            </Grid>
            <StoreReviews />
          </GridForm>
        </GridContent>
      </Container>
    </BoxStyled>
  );
};

const BoxStyled = styled(MuiBox)`
  padding-top: 1rem;
  margin-bottom: -20px;
  background-color: ${(props) => props.theme.palette.grey[200]};
`;

const GridLinks = styled(Grid)`
  border-radius: 6px;
  text-align: left;
  height: 225px;
  ol {
    margin-top: 1rem;
    padding-left: 1rem;
  }
  background-color: ${(props) => props.theme.palette.common.white};
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        height: 270px;
      }
      ${props.theme.breakpoints.down("xs")} {
        margin-bottom: 1rem;
        height: auto;
      }
    `}
`;

const GridForm = styled(Grid)`
  margin: 0 0 2rem 0;
  padding-left: 1.5rem;
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
