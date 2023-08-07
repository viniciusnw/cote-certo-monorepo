import React from "react";
import styled from "@emotion/styled";
import ReactMegaMenu from "react-mega-menu";
import { useTheme, css } from "@emotion/react";
import {
  ExpandMore as ExpandMoreIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Close as CloseIcon
} from "@material-ui/icons";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button as MuiButton,
  Container as MuiContainer,
  Typography,
  Drawer,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Grid,
} from "@material-ui/core";
import { Link } from "../Link";
import { width } from "./../../utils";

import MegaMenuJSON from "./mega-menu.json";

export const MegaMenu: React.FC = () => {
  const theme = useTheme();

  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const [openDrawerMenu, setDrawerMenu] = React.useState<boolean>(false);

  const Menu = [
    {
      label: "Promoções",
      link: "/",
    },
    {
      label: "Smartphones",
      link: "/",
    },
    {
      label: "Hardware",
      link: "/",
    },
    {
      label: "Perfiféricos",
      link: "/",
    },
    {
      label: "PC Gamer",
      link: "/",
    },
    {
      label: "Fones",
      link: "/",
    },
    {
      label: "Eletrodomesticos",
      link: "/",
    },
    {
      label: "Televisores",
      link: "/",
    },
  ];

  const megaMenuData = MegaMenuJSON.map((item, idx) => ({
    key: idx,
    label: item.label,
    items: (
      <MegaMenuItens
        menu={item.itens}
        bannerUrl={item.banner}
        noSubItens={!!item.noSubItens}
      />
    ),
  }));

  const megMenuStyle = {
    menuProps: {
      style: {
        margin: "0",
      },
    },
    contentProps: {
      style: {
        width:
          width() < theme.breakpoints.values.md
            ? "550px"
            : width() < theme.breakpoints.values.lg
              ? "750px"
              : "1000px",

        display: "flex",
        borderLeft: `solid 1px ${theme.palette.grey[300]}`,
      },
    },
    menuItemProps: {
      style: {
        width: width() < theme.breakpoints.values.md ? "180px" : "200px",
        cursor: "pointer",
        padding: ".8rem .5rem",
        color: theme.palette.text.primary,
        borderLeft: "solid 2px transparent",
      },
    },
    menuItemSelectedProps: {
      style: {
        cursor: "pointer",
        padding: ".8rem .5rem",
        color: theme.palette.text.primary,
        borderLeft: `solid 4px ${theme.palette.secondary.main}`,
      },
    },
    containerProps: {
      style: {
        borderRadius: "0 0 .5rem .5rem",
        boxShadow: "4px 4px 4px rgb(0 0 0 / 15%)",
        backgroundColor: `${theme.palette.common.white}`,
      },
    },
  };

  return (
    <Box my={2}>
      <MenuDesktopContainer>
        <Container maxWidth={"lg"}>
          <MegaMenuContainer>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => setOpenMenu(!openMenu)}
              endIcon={<ArrowDropDownIcon color="action" />}
            >
              <Typography variant="body2" color="textPrimary">
                Ver departamentos
              </Typography>
            </Button>

            <MegaMenuContent isOpen={openMenu}>
              <ReactMegaMenu
                tolerance={50}
                data={megaMenuData}
                styleConfig={megMenuStyle}
                onExit={() => setOpenMenu(false)}
              />
            </MegaMenuContent>
          </MegaMenuContainer>

          {Menu.map((item) => (
            <LinkStyled href={item.link}>
              <Typography variant="body2" align="center" color="textPrimary">
                {item.label}
              </Typography>
            </LinkStyled>
          ))}
        </Container>
      </MenuDesktopContainer>

      <MenuMobileContainer>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => setDrawerMenu(true)}
          endIcon={<ArrowDropDownIcon color="action" />}
        >
          <Typography variant="body2" color="textPrimary">
            Categorias
          </Typography>
        </Button>

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
                  <b>Categorias</b>
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>
          {MegaMenuJSON.map((menu) => (
            <div style={{ margin: ".2rem 0" }}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body2" color="textPrimary">
                    {menu.label}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {menu?.itens?.map((item: any) => (
                    <React.Fragment>
                      <Link href={"/"}>
                        <Typography variant="caption" color="textPrimary">
                          {item.label}
                        </Typography>
                      </Link>

                      {item?.itens?.map((subItem: any) => (
                        <Link href={"/"}>
                          <Typography variant="subtitle2" color="textPrimary">
                            {subItem.label}
                          </Typography>
                        </Link>
                      ))}
                    </React.Fragment>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </Drawer>
      </MenuMobileContainer>
    </Box>
  );
};

type Menu = Array<{
  label: string;
  url?: string;
  itens?: Array<{
    url: string;
    label: string;
  }>;
}>;

export const MegaMenuItens: React.FC<{
  menu: Menu;
  bannerUrl?: string;
  noSubItens: boolean;
}> = ({ menu, bannerUrl, noSubItens }) => {
  return (
    <MegaMenuItensContainer noSubItens={noSubItens} bannerUrl={bannerUrl}>
      {menu?.map((item, idx) => (
        <MegaMenuItem key={idx}>
          <Link href={"/"}>
            <Typography variant="body2" color="textPrimary">
              {noSubItens ? item.label : <b>{item.label}</b>}
            </Typography>
          </Link>

          {item?.itens?.map((subItem, idx) => (
            <Link key={idx} href={"/"}>
              <Typography variant="body2" color="textPrimary">
                {subItem.label}
              </Typography>
            </Link>
          ))}
        </MegaMenuItem>
      ))}
    </MegaMenuItensContainer>
  );
};

const AppBar = styled(MuiAppBar)`
  position: initial;
  background: linear-gradient(243.18deg, #00C192 0%, #39d064 100%);
  ${(props) =>
    css`
      ${props.theme.breakpoints.up("md")} {
        display: none;
      }
    `}
`;

const MenuMobileContainer = styled.div`
  display: none;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        display: block;
      }
    `};
`;

const MenuDesktopContainer = styled.div`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        display: none;
      }
    `}
`;

const LinkStyled = styled(Link)`
  padding: 5px 15px;
`;

const Button = styled(MuiButton)`
  border: none;
  margin: 0 0.5rem;
  &:hover {
    border: none;
  }
`;

const MegaMenuContainer = styled.div`
  position: relative;
`;

type MegaMenuItensContainerProps = {
  bannerUrl?: string;
  noSubItens: boolean;
};

const MegaMenuItensContainer = styled.div<MegaMenuItensContainerProps>`
  width: 100%;
  height: 100%;
  display: grid;
  background-repeat: no-repeat;
  padding: 0.5rem 20vw 0.5rem 1rem;
  grid-template-columns: repeat(2, 1fr);
  background-position: bottom -30px right -30px;
  background-image: url(${(props) => (props.bannerUrl ? props.bannerUrl : "")});
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        background-size: 60%;
        grid-template-columns: repeat(1, 1fr);
      }
    `}
  ${(props) =>
    props.noSubItens &&
    css`
      grid-template-columns: repeat(2, 1fr) !important;
    `}
`;

const MegaMenuItem = styled.div`
  margin: 0.3rem 0;
`;

const MegaMenuContent = styled.div<{ isOpen: boolean }>`
  z-index: 9;
  bottom: -1rem;
  position: absolute;
  background-color: #fff;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        bottom: 0;
        left: 0.5rem;
      }
    `}
`;

const Container = styled(MuiContainer)`
  display: grid;
  grid-template-columns: auto repeat(8, 1fr);
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: auto repeat(3, 1fr);
      }
    `}
`;
