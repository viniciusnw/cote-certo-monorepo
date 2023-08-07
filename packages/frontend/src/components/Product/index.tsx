import React from "react";

import { Full } from "./Full";
import { Half } from "./Half";
import { Horizontal } from "./Horizontal";
import { Comparison } from "./Comparison";
import { ProductEnum } from "../../utils/constants";

export type ProductProps = {
  __typename: ProductEnum;
  title?: string;
  stores?: number;
  minPrice?: number;
  category?: string;
  imageUrl: string;
  urlRedirect: string;
  price?: number;
  previousPrice?: number;
  alertPrice?: number;
  installment?: {
    value: number;
    installment: number;
    interestRate: boolean;
  };
  shipping?: {
    minDays: number;
    value: number;
  };
  store?: {
    type: string;
    isOpen: boolean;
    district: string;
    distance: number;
  };
  rating?: number;
  storeLogo?: string;
};

export const Product: React.FC<ProductProps> = (props) => {
  return <ProductComponent {...props} />;
};

const ProductComponent: React.FC<ProductProps> = (props) => {
  if (props.__typename === ProductEnum.Full) return <Full {...props} />;
  if (props.__typename === ProductEnum.Half) return <Half {...props} />;
  if (props.__typename === ProductEnum.Horizontal)
    return <Horizontal {...props} />;
  if (props.__typename === ProductEnum.Comparison)
    return <Comparison {...props} />;
  return <></>;
};
