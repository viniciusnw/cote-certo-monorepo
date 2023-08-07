import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Grid, Typography, Box } from "@material-ui/core";

import { StoreForm } from "../StoreForm";
import { SelectStore } from "../SelectStore";
import logoStore from './../../assets/static/products/product-logo-bahia.png'
import logoStore2 from './../../assets/static/products/product-logo-sony.png'

export const Stores = () => {
  const [addNew, setAddNew] = React.useState<boolean>(false);
  const [selectedStore, setSelectedStore] = React.useState<any>();

  const stores = [
    {
      id: 'stringId1',
      title: "Casas Bahia",
      imageUrl: logoStore,
      cnpj: "59.291.534/0001",
      phone: "00 0000-0000",
    },
    {
      id: 'stringId2',
      title: "Sony",
      imageUrl: logoStore2,
      cnpj: "12.567.234/0001",
      phone: "00 0000-0000",
    },
  ]

  const handlerCancelStoreForm = () => {
    setTimeout(() => {
      setAddNew(false)
      setSelectedStore(undefined)
    }, 200)
  }

  const handlerAddNewStore = () => {
    setTimeout(() => {
      setAddNew(true)
    }, 200);
  }

  const handlerStoreSelect = (storeId: any) => {
    setTimeout(() => {
      setSelectedStore(storeId)
    }, 200)
  }

  return (
    <>
      {!(addNew || selectedStore) && <SelectStore onStoreSelect={handlerStoreSelect} onAddNew={handlerAddNewStore} stores={stores} />}
      {(addNew || selectedStore) && <StoreForm onCancel={handlerCancelStoreForm} />}
    </>
  );
};
