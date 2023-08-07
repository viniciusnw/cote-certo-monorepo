import { useEffect } from 'react';
import { DocumentNode } from 'graphql';
import {
  useLazyQuery as useApolloLazyQuery,
  NetworkStatus,
} from '@apollo/client';

import { useAuthenticationUserState } from './authentication/authenticationUserState';

import { AUTHENTICATION_USER_ERRORS } from './errors';

type Variables = Record<string, unknown>;

export const useLazyQuery = <
  D extends unknown,
  V extends Variables = Variables
>(
  query: DocumentNode,
  variables?: Partial<V>,
) => {
  const [
    fetch,
    { data, loading, error, networkStatus, fetchMore },
  ] = useApolloLazyQuery<D>(query, {
    variables,
    notifyOnNetworkStatusChange: true,
    errorPolicy: 'all',
  });

  const { logout } = useAuthenticationUserState();

  useEffect(() => {
    const notAuthorizedError = error?.graphQLErrors.find(
      graphqlError =>
        graphqlError.extensions?.code ===
        AUTHENTICATION_USER_ERRORS.NOT_AUTHORIZED,
    );

    notAuthorizedError && logout();
  }, [error]);

  const load = async (newVariables?: Partial<V>) =>
    fetch({ variables: newVariables });

  const loadMore = async (newVariables?: Partial<V>) =>
    fetchMore && fetchMore({ variables: newVariables });

  const isRefetching = networkStatus === NetworkStatus.refetch;

  return {
    load,
    loadMore,
    isRefetching,
    isLoading: loading,
    data: data || null,
    error: error || null,
  };
};
