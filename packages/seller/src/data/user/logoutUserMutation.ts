import { gql } from '@apollo/client';
import { useAuthenticationUserState } from '../authentication/authenticationUserState';
import { client } from '../client';
import { useMutation } from '../mutation';

export const useUserLogoutMutation = () => {
  const { logout: removeUserToken } = useAuthenticationUserState();

  const { commit, isLoading, error } = useMutation<Data>(userLogoutMutation);

  const logout = () => {
    return commit()
      .catch(errorResponse => console.log(errorResponse))
      .then(() => removeUserToken())
      .then(() => client.resetStore());
  };

  return {
    logout,
    isLoggingOut: isLoading,
    logoutError: error,
  };
};

export enum UserLogoutError {
  AUTHENTICATION_USER_ERRORS_NOT_AUTHORIZED = 'AUTHENTICATION_USER_ERRORS_NOT_AUTHORIZED',
}

type Data = {
  userLogout: {
    user: {
      id: string;
      username: string;
    };
  };
};

const userLogoutMutation = gql`
  mutation UserLogoutMutation {
    userLogout(input: { clientMutationId: "1" }) {
      user {
        id
        username
      }
    }
  }
`;
