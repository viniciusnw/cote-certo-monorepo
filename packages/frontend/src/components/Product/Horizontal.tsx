import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Rating from "@material-ui/lab/Rating";
import {
  ShoppingCart as ShoppingCartIcon,
  LocalShipping as LocalShippingIcon,
  RemoveShoppingCart as RemoveShoppingCartIcon,
} from "@material-ui/icons";
import { Typography, Button, Grid, Chip as MuiChip } from "@material-ui/core";

import { Link } from "../Link";
import { ProductProps } from "./";
import { formatCurrency } from "./../../utils";

export const Horizontal: React.FC<ProductProps> = (props) => {
  return (
    <Container>
      <Content container spacing={3}>
        <Grid xs={12} md={4} container item>
          <GridImageContainer container>
            <Grid xs={10} md={9} container justifyContent="center">
              <Chip size="small" color="primary" label={props.store?.type} />
              <div>
                <ImageProduct src={props.imageUrl} />
              </div>
            </Grid>

            <Grid item xs={2}>
              <div>
                <ImageLogo src={props.storeLogo} />
              </div>
            </Grid>
          </GridImageContainer>
        </Grid>

        <Grid xs={12} md={8} container item>
          <Grid xs={12} container spacing={2}>
            <Grid xs={12} item container>
              <Grid xs={12} sm={9} item>
                <Typography variant="h4" color="primary">
                  <b>{formatCurrency(props.price)}</b>
                </Typography>
                <Typography variant="subtitle2" color="textPrimary">
                  Em {props.installment?.installment}x de{" "}
                  {formatCurrency(props.installment?.value)}{" "}
                  {props.installment?.interestRate ? `sem juros` : `com juros`}
                </Typography>
              </Grid>

              <GridRating xs={12} sm={3} container justifyContent="flex-end">
                <Rating
                  value={props.rating}
                  onChange={(event, newValue) => console.log(newValue)}
                />
              </GridRating>
            </Grid>

            <Grid xs={12} item container spacing={1}>
              <Grid xs={12} sm={4} container item>
                <Grid xs={2} item>
                  <LocalShippingIcon color="action" />
                </Grid>

                <Grid xs={10} item>
                  <Typography variant="body2" color="textPrimary">
                    {props.shipping?.value === 0
                      ? `Frete gratis`
                      : props.shipping?.value}{" "}
                    <Typography variant="caption" color="textSecondary">
                      (estimado)
                    </Typography>
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    em até {props.shipping?.minDays} dias úteis
                  </Typography>
                </Grid>
              </Grid>

              <Grid xs={12} sm={4} container item>
                <Grid xs={2} item>
                  {props.store?.isOpen ? (
                    <ShoppingCartIcon color="action" />
                  ) : (
                    <RemoveShoppingCartIcon color="action" />
                  )}
                </Grid>

                <Grid xs={10} item>
                  <Typography variant="body2" color="textPrimary">
                    {props.store?.isOpen ? `Loja aberta agora` : `Loja fechada`}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {`${props.store?.district}, ${props.store?.distance}Km`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={12} item container>
              <GridActions xs={6} sm={6} item container alignItems="center">
                <Typography variant="h5" color="primary">
                  <Link href={props.urlRedirect}> Ver detalhes</Link>
                </Typography>
              </GridActions>

              <GridActions
                sm={6}
                xs={6}
                item
                container
                alignItems="center"
                justifyContent="flex-end"
              >
                <Button size="large" variant="contained" color="primary">
                  <Typography variant="body2">
                    <b>Ver loja</b>
                  </Typography>
                </Button>
              </GridActions>
            </Grid>
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: calc(1.3rem + 12px);
`;

const Content = styled(Grid)`
  padding: 1.5rem;
  min-height: 300px;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.palette.common.white};
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding: 0.5rem;
      }
    `}
`;

const Chip = styled(MuiChip)`
  left: 0;
  padding: 0.5rem;
  position: absolute;
  background-color: ${(props) => props.theme.palette.neutral.main};
  .MuiChip-label {
    color: ${(props) => props.theme.palette.common.white};
    font-weight: ${(props) => props.theme.typography.h6.fontWeight};
  }
`;

const GridImageContainer = styled(Grid)`
  position: relative;
`;

const GridRating = styled(Grid)`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        justify-content: start;
      }
    `}
`;

const GridActions = styled(Grid)`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        justify-content: center;
      }
    `}
`;

const ImageProduct = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImageLogo = styled.img`
  max-width: 100%;
  height: auto;
`;
