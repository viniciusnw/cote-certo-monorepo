import { gql } from '@apollo/client';
import { useAuthenticationUserState } from '../authentication/authenticationUserState';
import { useMutation } from '../mutation';

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
          token: responseData.userLogin.token,
          ...responseData.userLogin.user,
        });
      }
    });
  };

  return {
    login,
    isLoggingIn: isLoading,
    loginError: error,
  };
};

type Data = {
  userLogin: {
    token: string;
    user: {
      id: string;
      nome: string;
      username: string;
    };
  };
};

type Input = {
  email: string;
  password: string;
};

const userLoginMutation = gql`
  mutation UserLoginMutation($input: UserLoginInput!) {
    userLogin(input: $input) {
      token
      user {
        id
        nome
        username
      }
    }
  }
`;
