import { gql } from '@apollo/client';

import { useMutation } from '../mutation';
import { useAuthenticationUserState } from '../authentication/authenticationUserState';

let clientMutationId = 0;

export const useUserLoginMutation = () => {
  const { login: setUser } = useAuthenticationUserState();

  const { commit, error, isLoading } = useMutation<Data, Input>(
    userLoginMutation,
  );

  const login = (input: Input) => {
    clientMutationId += 1;
    return commit({
      variables: {
        input: {
          ...input,
          clientMutationId: clientMutationId.toString(),
        },
      },
    }).then(({ data: responseData }) => {
      if (responseData) {
        setUser({
          ...responseData.userLogin.user,
          token: responseData.userLogin.token,
        });
      }
    });
  };

  return {
    login,
    loginError: error,
    isLoggingIn: isLoading,
  };
};

type Data = {
  userLogin: {
    role: string;
    token: string;
    expirationTime: number;
    user: {
      id: string;
      nome: string;
      email: string;
    };
  };
};

type Input = {
  user: string;
  password: string;
};

const userLoginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user{
        id
        name
        email
      }
      token
      expirationTime
      role
    }
}`;
