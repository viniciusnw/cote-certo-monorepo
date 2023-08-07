export const BFF_GRAPHQL_URL = `${process.env.URL_BFF}/graphql`;
export const __DEV__ = process.env.NODE_ENV === 'development';
export const __PROD__ = process.env.NODE_ENV === 'production';
export const { NODE_ENV } = process.env;
