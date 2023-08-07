import { useEffect } from 'react';
import { DocumentNode } from 'graphql';
import { useQuery as useApolloQuery, NetworkStatus } from '@apollo/client';

import { useAuthenticationUserState } from './authentication/authenticationUserState';

import { AUTHENTICATION_USER_ERRORS } from './errors';

type Variables = Record<string, unknown>;

export const useQuery = <D extends unknown, V extends Variables = Variables>(
  query: DocumentNode,
  variables?: V,
) => {
  const { data, loading, error, networkStatus, fetchMore } = useApolloQuery<D>(
    query,
    {
      variables,
      notifyOnNetworkStatusChange: true,
      errorPolicy: 'all',
    },
  );

  const { logout } = useAuthenticationUserState();

  useEffect(() => {
    const notAuthorizedError = error?.graphQLErrors.find(
      graphqlError =>
        graphqlError.extensions?.code ===
        AUTHENTICATION_USER_ERRORS.NOT_AUTHORIZED,
    );

    notAuthorizedError && logout();
  }, [error]);

  const loadMore = async (newVariables?: Partial<V>) =>
    fetchMore({ variables: newVariables });

  const isRefetching = networkStatus === NetworkStatus.refetch;

  return {
    loadMore,
    isRefetching,
    isLoading: loading,
    data: data || null,
    error: error || null,
  };
};
