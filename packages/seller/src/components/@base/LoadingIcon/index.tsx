import React from 'react';
import styled from '@emotion/styled';
import loadingIcon from './../../../assets/icons/loading.svg';
import backdropLoading from '../../../assets/icons/backdropLoading.svg';

const LoadingIconStyled = styled.img`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  animation: rotation 2s infinite linear;
`;

type LoadingIconProps = {
  hasBackdrop?: boolean;
};

export const LoadingIcon: React.FC<LoadingIconProps> = ({ hasBackdrop }) => {
  return (
    <LoadingIconStyled src={hasBackdrop ? backdropLoading : loadingIcon} />
  );
};
