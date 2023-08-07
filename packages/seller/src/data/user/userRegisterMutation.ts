import { gql } from '@apollo/client';
import { useAuthenticationUserState } from '../authentication/authenticationUserState';
import { useMutation } from '../mutation';

let clientMutationId = 0;

export const useUserRegisterMutation = () => {
  const { login: setUser } = useAuthenticationUserState();

  const { commit, error, isLoading } = useMutation<Data, Input>(
    userLoginMutation,
  );

  const register = (input: Input) => {
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
    register,
    isRegisting: isLoading,
    registerError: error,
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
