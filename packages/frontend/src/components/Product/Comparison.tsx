import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Link } from "../Link";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  MenuItem,
  MenuList,
  Typography,
  IconButton,
  Menu, Button,
  Grid,
  Switch as MuiSwitch,
  FormGroup,
} from "@material-ui/core";


import { formatCurrency } from "../../utils";
import { ProductProps } from "../Product";

export const Comparison: React.FC<ProductProps> = (props) => {
  return (
    <Container>
      <Content container spacing={1}>
        <GridImageContainer xs={4} sm={5} md={3} item>
          <Grid md={12} xs={12}>
            <ImageProduct src={props.imageUrl} />
          </Grid>
        </GridImageContainer>

        <Grid xs={8} md={9} sm={7} container item>
          <Grid container spacing={4}>
            <MainGrid xs={12} md={12} sm={12} item container>
              <GridTitle md={4} xs={8} sm={8} item>
                <Typography variant="subtitle2" color="textPrimary">
                  {props.title}
                </Typography>
              </GridTitle>
              <GridMenu xs={4} sm={4} item>
                <ResponsiveMenu />
              </GridMenu>
              <GridRating md={8} xs={12} sm={6} container>
                <Grid item md={5} sm={2} xs={1}>
                  <CustomdButton
                    size="large"
                    color="primary"
                    startIcon={<DeleteIcon color="action" />}
                  >
                    <Typography variant="subtitle2" color="textPrimary">
                      Remover
                    </Typography>
                  </CustomdButton>
                </Grid>

                <Switch />
              </GridRating>
            </MainGrid>
            <Grid xs={12} item container justifyContent="space-evenly">
              <CustomGridActions
                sm={12}
                md={2}
                xs={12}
                item
                container
                justifyContent="center"
                alignItems="center"
              >
                <GridActions sm={12} md={12} xs={12} item>
                  <Grid sm={4} md={12} xs={5} item>
                    <Typography variant="caption" color="textSecondary">
                      Quanto era:
                    </Typography>
                  </Grid>
                  <Grid sm={5} md={12} xs={4} item>
                    <PriceTypography variant="body1" color="textSecondary">
                      {formatCurrency(props.previousPrice)}
                    </PriceTypography>
                  </Grid>
                </GridActions>
              </CustomGridActions>
              <CustomGridActions
                sm={12}
                md={2}
                xs={12}
                item
                container
                alignItems="center"
              >
                <GridActions sm={12} md={12} xs={12} item>
                  <Grid sm={4} md={12} xs={5} item>
                    <Typography variant="caption" color="textPrimary">
                      Preço agora:
                    </Typography>
                  </Grid>
                  <Grid sm={5} md={12} xs={4} item>
                    <PriceTypography variant="body1" color="primary">
                      {formatCurrency(props.price)}
                    </PriceTypography>
                  </Grid>
                </GridActions>
              </CustomGridActions>
              <CustomGridActions
                sm={12}
                md={2}
                xs={12}
                item
                container
                alignItems="center"
              >
                <GridActionsAlert sm={12} md={12} xs={12} item>
                  <Grid container item>
                    <Grid sm={4} md={12} xs={5} item>
                      <Typography variant="caption" color="textPrimary">
                        Alerta para:
                      </Typography>
                    </Grid>
                    <Grid sm={5} md={12} xs={4} item>
                      <PriceTypography variant="body1" color="textPrimary">
                        {formatCurrency(props.alertPrice)}
                      </PriceTypography>
                    </Grid>
                  </Grid>
                  <GridActionsAlertResponsive item sm={12} md={12} xs={12}>
                    <CustomdButton size="small" color="primary">
                      <Typography variant="caption" color="primary">
                        Ajustar
                      </Typography>
                    </CustomdButton>
                  </GridActionsAlertResponsive>
                </GridActionsAlert>
              </CustomGridActions>

              <GridActionsButtom
                md={4}
                sm={12}
                xs={12}
                item
                container
                alignItems="center"
              >
                <Button size="large" variant="contained" color="primary">
                  <Typography variant="body2">
                    <b>Ver loja</b>
                  </Typography>
                </Button>
              </GridActionsButtom>
            </Grid>
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: -20px;
  padding: 1.3rem;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding: 1.3rem 0;
      }
    `}
`;

const Content = styled(Grid)`
  min-height: 200px;
  border-radius: 0.8rem;
  padding: 1.5rem 0rem 1rem 0rem;
  background-color: ${(props) => props.theme.palette.common.white};
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        padding: 1.2rem;
      }
      ${props.theme.breakpoints.down("xs")} {
        padding: 0;
      }
    `}
`;

const CustomdButton = styled(Button)`
  padding: 0;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        justify-content: start;
      }
    `}
`;

const MainGrid = styled(Grid)`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        justify-content: center;
        align-items: center;
      }
    `}
`;

const PriceTypography = styled(Typography)``;

const GridActionsButtom = styled(Grid)`
  justify-content: flex-end;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        display: none;
      }
    `}
`;

const GridActionsAlert = styled(Grid)`
  display: -webkit-box;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        display: grid;
        padding: 0.3rem 0 0.8rem 0;
      }
    `}
`;

const GridActionsAlertResponsive = styled(Grid)`
  text-align: left;
  padding-top: 1.3rem;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        padding: 0;
        justify-content: left;
      }
    `}
`;

const GridMenu = styled(Grid)`
  display: none;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        display: grid;
        justify-content: right;
      }
    `}
`;

const GridImageContainer = styled(Grid)`
  position: relative;
  text-align: center;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        margin-top: 0;
      }
      ${props.theme.breakpoints.down("xs")} {
        margin-top: 0.8rem;
      }
    `}
`;

const GridTitle = styled(Grid)`
  text-align: center;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        text-align: left;
      }
      ${props.theme.breakpoints.down("xs")} {
        margin-top: 0.8rem;
        .MuiTypography-root {
          font-size: 1rem;
        }
      }
    `}
`;

const GridRating = styled(Grid)`
  justify-content: flex-end;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        display: none;
      }
    `}
`;

const CustomGridActions = styled(Grid)`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        justify-content: end;
      }
    `}
`;

const GridActions = styled(Grid)`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        padding-top: 0.3rem;
        display: flex;
      }
      ${props.theme.breakpoints.down("xs")} {
        justify-content: end;
      }
    `}
`;

const ImageProduct = styled.img`
  height: auto;
  max-width: 70%;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        max-width: 90%;
      }
    `}
`;

const ResponsiveMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activate, setActivate] = React.useState(true);
  const [favorite, setFavorite] = React.useState("Desativar");

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseActivate = () => {
    if (!activate) {
      setFavorite("Desativar")
    } else {
      setFavorite("Ativar")
    }
    setActivate(!activate);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}

      >
        <MenuList>
          <MenuItem onClick={handleCloseActivate}>
            <Typography variant="inherit" color="textPrimary">
              {favorite}
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="inherit" color="textPrimary">
              Ver loja
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="inherit" color="textPrimary">
              Remover
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

const Switch: React.FC = () => {
  const [state, setState] = React.useState(true);

  const handleChange = () => {
    setState(!state);
  };
  return (
    <FormGroup>
      <Grid md={5} sm={12} container justifyContent="flex-end" >
        <MuiSwitch
          size="small"
          color="primary"
          checked={state}
          onChange={handleChange}
        />
      </Grid>
    </FormGroup>
  );
};
