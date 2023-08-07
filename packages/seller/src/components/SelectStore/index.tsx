import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Typography,
  Paper,
  Button
} from "@material-ui/core";
import {
  Add as AddIcon
} from "@material-ui/icons"

import { StoreItem, Store } from './Storeitem'

type SelectStoreProps = {
  stores: Array<Store>
  onStoreSelect: (storeId: any) => null | void
  onAddNew: () => null | void
}

export const SelectStore: React.FC<SelectStoreProps> = ({ stores, onStoreSelect, onAddNew }) => {

  const _onStore = (id: any) => {
    onStoreSelect(id)
  }

  const _onAddNew = () => {
    onAddNew()
  }

  return (
    <Container>
      {stores.map((store, idx) => <StoreItem key={idx} onClick={_onStore} store={store} />)}
      <AddNewStore color='primary' variant='outlined' onClick={_onAddNew}>
        <AddIcon fontSize='large' color='primary' />
      </AddNewStore>
    </Container>
  );
};

const Container = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        grid-template-columns: 1fr;
      }
    `}
`;

const AddNewStore = styled(Button)`
  width: 100%;
  border: none;
  display: flex;
  cursor: pointer;
  min-height: 134px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${(props) => props.theme.palette.common.white};
  &:hover{
    border: none;
    background-color: ${(props) => props.theme.palette.common.white} !important;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  }
`;