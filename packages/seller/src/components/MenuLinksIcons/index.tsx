import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Typography, List, Grid, Link, Drawer,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Icon
} from "@material-ui/core";
import {
  PersonOutline as PersonOutlineIcon,
  StarBorder as StarBorderIcon,
  ExitToApp as ExitToAppIcon,
  TrendingUp as TrendingUpIcon,
  LocalMall as LocalMallIcon,
  BorderAll as BorderAllIcon,
  Menu as MenuIcon,
  Close as CloseIcon
} from "@material-ui/icons"

export const MenuLinksIcons: React.FC = () => {
  const [openDrawerMenu, setDrawerMenu] = React.useState<boolean>(false);

  const list = [
    {
      information: "Produtos",
      urlRedirect: "/",
      icon: <LocalMallIcon color='secondary' fontSize="small" />,
    },
    {
      information: "Avaliação de lojas",
      urlRedirect: "/",
      icon: <StarBorderIcon color='secondary' fontSize="small" />,
    },
    {
      information: "Relatórios",
      urlRedirect: "/",
      icon: <TrendingUpIcon color='secondary' fontSize="small" />,
    },
    {
      information: "Minha conta",
      urlRedirect: "/",
      icon: <PersonOutlineIcon color='secondary' fontSize="small" />,
    },
    {
      information: "Sair ",
      urlRedirect: "/",
      icon: <ExitToAppIcon color='secondary' fontSize="small" />,
    },
  ];

  return (
    <div>
      <GridLinksMobile item xs={12}>
        <IconButton
          type="button"
          edge="start"
          color="default"
          onClick={() => setDrawerMenu(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={openDrawerMenu}
          onClose={() => setDrawerMenu(false)}
        >
          <AppBar>
            <Toolbar>
              <IconButton
                type="button"
                edge="start"
                color="default"
                onClick={() => setDrawerMenu(false)}
              >
                <CloseIcon />
              </IconButton>
              <Grid container>
                <Typography variant="h2">
                  <b>Menu</b>
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>

          <br />

          <div>
            {list.map((i, index) => (
              <Link key={index} href="#" onClick={() => null}>
                <GridLinksItem key={index.toString() + i.information}>
                  {i.icon}
                  <Typography color="textPrimary">
                    {i.information}
                  </Typography>
                </GridLinksItem>
              </Link>
            ))}
          </div>
        </Drawer>
      </GridLinksMobile>

      <GridLinks item>
        <ListLinks>
          {list.map((i, index) => (
            <Link key={index} href="#" onClick={() => null}>
              <GridLinksItem key={index.toString() + i.information}>
                {i.icon}
                <Typography variant="inherit" color="textPrimary">
                  {i.information}
                </Typography>
              </GridLinksItem>
            </Link>
          ))}
        </ListLinks>
      </GridLinks>
    </div>
  );
};

const GridLinksItem = styled.div`
  gap: .5rem;
  display: grid;
  padding: .5rem;
  padding-left: 1rem;
  align-items: center;
  grid-template-columns: min-content 1fr;
`

const AppBar = styled(MuiAppBar)`
  width: 70vw;
  position: initial;
  background: linear-gradient(243.18deg, #00C192 0%, #39d064 100%);
  ${(props) =>
    css`
      ${props.theme.breakpoints.up("md")} {
        display: none;
      }
    `}
`;

const GridLinks = styled(Grid)`
  padding: .5rem 0;
  text-align: left;
  border-radius: 6px;
  background-color: ${(props) => props.theme.palette.common.white};
  ol {
    margin-top: 1rem;
    padding-left: 1rem;
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        display: none;
      }
    `}
`;

const GridLinksMobile = styled(Grid)`
  display: none;
  text-align: right;
  margin-bottom: 1rem;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        display: block;
      }
    `};
`;

const ListLinks = styled(List)`
  text-align: left;
  padding: 0;
`;