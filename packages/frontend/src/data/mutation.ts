import { useEffect } from 'react';
import { DocumentNode } from 'graphql';
import { useMutation as useApolloMutation } from '@apollo/client';

import { AUTHENTICATION_USER_ERRORS } from './errors';
import { useAuthenticationUserState } from './authentication/authenticationUserState';

export type MutationInputBase<InputType extends Record<string, unknown>> = {
  clientMutationId: string;
} & InputType;

type Variables<InputType extends Record<string, unknown>> = {
  input: MutationInputBase<InputType>;
};

export const useMutation = <
  DataType extends {} = {},
  InputType extends Record<string, unknown> = {}
>(
  query: DocumentNode,
  variables?: Variables<InputType>,
) => {
  const [commit, { data, loading, error }] = useApolloMutation<
    DataType,
    Variables<InputType>
  >(query, {
    variables,
    notifyOnNetworkStatusChange: true,
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

  return {
    commit,
    data,
    error,
    isLoading: loading,
  };
};
