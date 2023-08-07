import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "../Link";
import { Typography, List, Grid } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ListItemIcon from "@material-ui/core/ListItemIcon";

export const MenuLinksIcons: React.FC = () => {
  const list = [
    {
      information: "Alerta de preços",
      urlRedirect: "http://localhost:3000/alerta-de-precos",
      icon: <NotificationsIcon fontSize="small" />,
    },
    {
      information: "Avaliação de lojas",
      urlRedirect: "http://localhost:3000/avaliacoes-em-lojas",
      icon: <StarBorderIcon fontSize="small" />,
    },
    {
      information: "Avaliação em produtos",
      urlRedirect: "http://localhost:3000/avaliacoes-em-produtos",
      icon: <TrendingUpIcon fontSize="small" />,
    },
    {
      information: "Minha conta",
      urlRedirect: "http://localhost:3000/minha-conta",
      icon: <PersonOutlineIcon fontSize="small" />,
    },
    {
      information: "Sair ",
      urlRedirect: "http://localhost:3000",
      icon: <ExitToAppIcon fontSize="small" />,
    },
  ];

  return (
    <ListLinks>
      {list.map((i, index) => (
        <Link href={i.urlRedirect}>
          <ol key={index.toString() + i.information}>
            <GridContent container>
              <GridIcon sm={2} xs={1} item>
                <Icon>{i.icon}</Icon>
              </GridIcon>
              <Grid sm={10} xs={11} item>
                <Typography variant="inherit" color="textPrimary">
                  {i.information}
                </Typography>
              </Grid>
            </GridContent>
          </ol>
        </Link>
      ))}
    </ListLinks>
  );
};

const ListLinks = styled(List)`
  text-align: left;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 1rem;
      }
    `}
`;

const GridContent = styled(Grid)`
  padding-right: 0;
  text-align: left;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        text-align: center;
      }
    `}
`;

const Icon = styled(ListItemIcon)`
  color: ${(props) => props.theme.palette.primary.main};
`;
const GridIcon = styled(Grid)`
   padding-left: 0;
  
`;
