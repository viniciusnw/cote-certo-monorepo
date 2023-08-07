import * as React from "react";
import { Routes } from "react-router-dom";

import { routing } from "../../routing";
import { checkAuthenticationUserMiddleware } from "../../middlewares/checkAuthenticationUserMiddleware";

import Products from "../../../screens/Product/Products";
import MyAccount from "../../../screens/MyAccount/MyAccount";
import Evaluations from "../../../screens/Evaluations/Evaluations";
import Reports from "../../../screens/Reports/Reports";
import NewAndEditProduct from "../../../screens/Product/NewAndEditProduct";

import {
  MY_ACCOUNT,
  EVALUATION,
  PRODUCTS,
  PRODUCT_NEW,
  REPORTS,
  PRODUCT
} from "./routes";

const ProductNewRouting = routing(NewAndEditProduct, {
  suspense: false,
  middlewares: [checkAuthenticationUserMiddleware()],
});

const ProductRouting = routing(NewAndEditProduct, {
  suspense: false,
  middlewares: [checkAuthenticationUserMiddleware()],
});

const ProductsRouting = routing(Products, {
  suspense: false,
  middlewares: [checkAuthenticationUserMiddleware()],
});

const MyAccountRouting = routing(MyAccount, {
  suspense: false,
  middlewares: [checkAuthenticationUserMiddleware()],
});

const EvaluationsRouting = routing(Evaluations, {
  suspense: false,
  middlewares: [checkAuthenticationUserMiddleware()],
});

const ReportsRouting = routing(Reports, {
  suspense: false,
  middlewares: [checkAuthenticationUserMiddleware()],
});

export const ShopperRouter = () => {
  return (
    <Routes>
      <ReportsRouting path={"/"} />
      
      <ProductsRouting path={PRODUCTS} />
      <ProductNewRouting path={PRODUCT_NEW} />
      <ProductRouting path={PRODUCT} />
      
      <MyAccountRouting path={MY_ACCOUNT} />
      <EvaluationsRouting path={EVALUATION} />
      <ReportsRouting path={REPORTS} />
    </Routes>
  );
};
