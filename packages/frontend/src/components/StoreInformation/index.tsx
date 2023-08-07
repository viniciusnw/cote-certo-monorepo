import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CardInformation } from "./CardInformation";
import { Close as CloseIcon } from "@material-ui/icons";
import {
  Grid,
  Container,
  Box as MuiBox,
  Typography,
  Toolbar,
  Button,
  Dialog,
  AppBar,
  IconButton,
} from "@material-ui/core";
export const StoreInformation: React.FC = () => {
  const mapIframe = `https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed`
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <BoxStyled>
      <Container maxWidth="lg">
        <GridContent container>
          <CardInformation />
          <GridContainerMap sm={8} xs={12} container item spacing={6}>
            <GridMap sm={12} item>
              <GridText sm={7} item>
                <Typography variant="h3" color="textPrimary">
                  Como Chegar
                </Typography>
              </GridText>
              <MapModalSm sm={12} item>
                <iframe src={mapIframe} />
              </MapModalSm>
              <GridLocation sm={7} item>
                <Button
                  type="button"
                  onClick={handleClickOpen}
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  <Typography variant="body2">
                    <b>Mapa da localização</b>
                  </Typography>
                </Button>
              </GridLocation>
            </GridMap>
          </GridContainerMap>
        </GridContent>
      </Container>

      <Dialog fullScreen open={open}>
        <CustomAppBar>
          <Toolbar>
            <IconButton
              type="button"
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <GridMapTitle xs={12} item>
              <Typography variant="subtitle1">
                <b>Localização</b>
              </Typography>
            </GridMapTitle>
          </Toolbar>
        </CustomAppBar>
        <MapModal>
          <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </MapModal>
      </Dialog>
    </BoxStyled>
  );
};
const BoxStyled = styled(MuiBox)`
  background-color: ${(props) => props.theme.palette.grey[200]};
  padding-top: 1rem;
  margin-bottom: -20px;
`;
const CustomAppBar = styled(AppBar)`
  position: relative;
`;
const GridLocation = styled(Grid)`
  display: none;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        display: contents;
      }
    `}
`;
const GridText = styled(Grid)`
  padding: 0 0 1rem 0;
`;
const GridMapTitle = styled(Grid)`
  text-align: center;
`;
const MapModal = styled(Grid)`
  iframe {
    width: 100%;
    height: 94vh;
  }
`;

const MapModalSm = styled(Grid)`
  iframe {
    width: 100%;
    height: 60vh;
    ${(props) =>
      css`
        ${props.theme.breakpoints.down("md")} {
          height: 80vh;
        }
        ${props.theme.breakpoints.down("xs")} {
          display: none;
        }
      `}
  }
`;

const GridContainerMap = styled(Grid)`
  padding-left: 2rem;
  margin: 0 0 2rem 0;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        justify-content: center;
        text-align: center;
        padding: 0px;
      }
    `}
`;
const GridMap = styled(Grid)`
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        justify-content: center;
        text-align: center;
      }
    `}
`;
const GridContent = styled(Grid)`
  padding: 2rem 0 2rem 0;
`;
