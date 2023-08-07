import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  FilterList as FilterListIcon,
  Cancel as CancelIcon,
} from "@material-ui/icons";
import { Typography, Box, Grid, Button, IconButton } from "@material-ui/core";

import { ProductFiltersVertical } from "../ProductFiltersVertical";
import { ProductFiltersHorizontal } from "../ProductFiltersHorizontal";

export const ProductListHeader: React.FC = () => {
  const [openMenu, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (openMenu) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);
  return (
    <>
      <Box my={0.5}>
        <Grid alignItems="center" container>
          <Grid xs={7} sm={10} md={12} item>
            <Typography variant="h3" color="textPrimary">
              1.203 Resultados para "Smart TV"
            </Typography>
          </Grid>

          <GridStyled xs={5} sm={2} item>
            <Button
              color="primary"
              variant="contained"
              startIcon={<FilterListIcon />}
              onClick={() => setMenuOpen(true)}
            >
              <Typography>Filtros</Typography>
            </Button>
          </GridStyled>
        </Grid>
      </Box>

      <FilterResponsive visible={openMenu}>
        <Grid container>
          <IconButtonStyled size="medium" onClick={() => setMenuOpen(false)}>
            <CancelIcon fontSize="large" color="primary" />
          </IconButtonStyled>
        </Grid>

        <ProductFiltersHorizontal />
        <ProductFiltersVertical />
      </FilterResponsive>
    </>
  );
};

const IconButtonStyled = styled(IconButton)`
  margin: -1rem;
`;

const FilterResponsive = styled.div<{ visible: boolean }>`
  top: 0;
  left: 0;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  overflow: auto;
  position: absolute;
  background-color: #fff;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const GridStyled = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  ${(props) =>
    css`
      ${props.theme.breakpoints.up("md")} {
        display: none;
      }
    `}
`;
