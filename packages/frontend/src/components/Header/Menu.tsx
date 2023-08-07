import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import {
  Menu as MuiMenu,
  MenuItem,
  ListItemIcon,
  Typography,
  IconButton,
  Fade,
} from "@material-ui/core";

import {
  Menu as MenuIcon,
  AccountBox as AccountBoxIcon,
  FavoriteBorderOutlined as FavIcon,
  InsertChartOutlinedRounded as ChartIcon,
} from "@material-ui/icons";

import { Link } from "../Link";
import { Favorites } from "../Favorites";
import { Compare } from "../Compare";

export const Menu: React.FC = () => {
  const router = useRouter();

  const [openFavorite, setOpenFavorite] = React.useState<boolean>(false);

  const [openCompare, setOpenCompare] = React.useState<boolean>(false);

  const [openMenu, setOpenMenu] = React.useState<null | HTMLElement>(null);

  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) =>
    setOpenMenu(event.currentTarget);

  return (
    <>
      <Container>
        <IconButton
          component="span"
          color="secondary"
          aria-label="Favoritos"
          onClick={() => setOpenFavorite(true)}
        >
          <FavIconStyled />
        </IconButton>
        <IconButton
          color="secondary"
          component="span"
          aria-label="Comparar"
          onClick={() => setOpenCompare(true)}
        >
          <ChartIconStyled />
        </IconButton>
        <Link href={"/"}>
          <Typography variant="body2" align="center">
            <b>Login</b>
          </Typography>
        </Link>
      </Container>

      <ResponsiveContainer>
        <IconButton
          type="submit"
          color="secondary"
          aria-label="search"
          onClick={handleClickMenu}
        >
          <MenuIconStyled />
        </IconButton>

        <MuiMenuStyled
          keepMounted
          anchorEl={openMenu}
          open={Boolean(openMenu)}
          TransitionComponent={Fade}
          onClose={() => setOpenMenu(null)}
        >
          <MenuItem
            onClick={() => {
              setOpenMenu(null);
              setOpenFavorite(true);
            }}
          >
            <ListItemIcon>
              <FavIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <Typography color="primary" variant="body1">
              Favoritos
            </Typography>
          </MenuItem>

          <MenuItem
            onClick={() => {
              setOpenMenu(null);
              setOpenCompare(true);
            }}
          >
            <ListItemIcon>
              <ChartIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <Typography color="primary" variant="body1">
              Comparador
            </Typography>
          </MenuItem>

          <MenuItem
            onClick={() => {
              setOpenMenu(null);
              router.push("/login");
            }}
          >
            <ListItemIcon>
              <AccountBoxIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <Typography color="primary" variant="body1">
              Login
            </Typography>
          </MenuItem>
        </MuiMenuStyled>
      </ResponsiveContainer>

      <Favorites isOpen={openFavorite} setAsOpen={setOpenFavorite} />
      <Compare isOpen={openCompare} setAsOpen={setOpenCompare} />
    </>
  );
};

const FavIconStyled = styled(FavIcon)`
  color: ${(props) => props.theme.palette.common.white};
`;

const ChartIconStyled = styled(ChartIcon)`
  color: ${(props) => props.theme.palette.common.white};
`;

const MenuIconStyled = styled(MenuIcon)`
  color: ${(props) => props.theme.palette.common.white};
`;

const Container = styled.div`
  display: grid;
  column-gap: 40px;
  align-items: center;
  justify-content: right;
  grid-template-columns: min-content min-content min-content;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        display: none;
      }
    `}
`;

const ResponsiveContainer = styled.div`
  ${(props) =>
    css`
      ${props.theme.breakpoints.up("md")} {
        display: none;
      }
    `}
`;

const MuiMenuStyled = styled(MuiMenu)`
  background-color: ${(props) => props.theme.palette.action.active};
`;
