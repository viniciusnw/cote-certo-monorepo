import * as React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  gql,
} from '@apollo/client';

import apolloLogger from 'apollo-link-logger';
import { createHttpLink } from '@apollo/client/link/http';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

import { BFF_GRAPHQL_URL, __DEV__ } from '../config';
import { getUserCookie } from './authentication/authenticationUserCookies';

const typeDefs = gql`
  type Mutation {
    login(email: String!, password: String!): Token
  }

  type Token {
    access_token: String!
  }
`;

const cache = new InMemoryCache({});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (networkError) {
    console.groupCollapsed('[Network Error]');
    console.log(networkError);
    console.log(operation);
    console.groupEnd();
  }

  if (graphQLErrors) {
    console.groupCollapsed('[GraphQL Errors]');
    graphQLErrors.map(console.log);
    console.groupEnd();
  }
});

const authLink = setContext((_, { headers }) => {
  const user = getUserCookie();

  return {
    headers: {
      ...headers,
      authorization: user?.token ? `Bearer ${user.token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: BFF_GRAPHQL_URL,
});

const link = ApolloLink.from([apolloLogger, errorLink, authLink, httpLink]);

export const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  connectToDevTools: __DEV__,
});

export const DataProvider: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
