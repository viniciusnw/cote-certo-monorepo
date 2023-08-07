import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Typography, Button, Grid
} from "@material-ui/core";

export type Store = {
  id: string;
  title: string,
  imageUrl: string,
  cnpj: string,
  phone: string,
}

type StoreItemProps = {
  store: Store,
  onClick: (id: any) => null | void
}

export const StoreItem: React.FC<StoreItemProps> = ({ store, onClick }) => {

  return (
    <GridStoreCard color='primary' variant='outlined' onClick={() => onClick(store.id)}>
      <GridImage md={6} sm={12} xs={4} item>
        <img src={store.imageUrl} />
      </GridImage>
      <GridText md={6} sm={12} xs={8} item>
        <GridTitle item>
          <Typography variant="h5" color="textPrimary">
            {store.title}
          </Typography>
        </GridTitle>
        <Grid item>
          <Typography variant="inherit" color="textPrimary">
            {store.cnpj}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="inherit" color="textPrimary">
            {store.phone}
          </Typography>
        </Grid>
      </GridText>
    </GridStoreCard>
  );
};

const GridText = styled(Grid)`
  text-align: center;
  padding: .8rem 0;
`;

const GridTitle = styled(Grid)`
  padding-bottom: 0.5rem;
`;

const GridImage = styled(Grid)`
  padding: .5rem;
  text-align: center;
  img{
    width: auto;
    max-width: 100%;
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding: 0;
      }
    `}
`;

const GridStoreCard = styled(Button)`
  width: 100%;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 6px;
  justify-content: center;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${(props) => props.theme.palette.common.white};
  &:hover{
    border: none;
    background-color: ${(props) => props.theme.palette.common.white} !important;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  }
`;