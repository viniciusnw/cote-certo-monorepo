import { gql } from '@apollo/client';

import { client } from '../apollo-client';
import { useMutation } from '../mutation';
import { useAuthenticationUserState } from '../authentication/authenticationUserState';

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
