import { USER_LOGIN, SIGNUP } from './routers/authentication/routes';
import {
  MY_ACCOUNT,
  REPORTS,
  PRODUCTS,
  EVALUATION,
  PRODUCT_NEW,
  PRODUCT
} from './routers/shopper/routes';

export const AUTHENTICATION = '/';
export const AUTHENTICATION_USER_LOGIN = `${AUTHENTICATION}${USER_LOGIN}`;
export const AUTHENTICATION_SIGNUP = `${AUTHENTICATION}${SIGNUP}`;

export const SHOPPER_AREA = '/area-do-lojista';
export const SHOPPER_AREA_MY_ACCOUNT = `${SHOPPER_AREA}/${MY_ACCOUNT}`;
export const SHOPPER_AREA_EVALUATION = `${SHOPPER_AREA}/${EVALUATION}`;
export const SHOPPER_AREA_PRODUCTS = `${SHOPPER_AREA}/${PRODUCTS}`;
export const SHOPPER_AREA_PRODUCT_NEW = `${SHOPPER_AREA}/${PRODUCT_NEW}`;
export const SHOPPER_AREA_PRODUCT = `${SHOPPER_AREA}/${PRODUCT}`;
export const SHOPPER_AREA_REPORTS = `${SHOPPER_AREA}/${REPORTS}`;
