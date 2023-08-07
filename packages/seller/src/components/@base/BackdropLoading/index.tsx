import React from 'react';
import styled from '@emotion/styled';

import { LoadingIcon } from '../LoadingIcon';

const BackdropComponent = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  background-color: rgba(207, 209, 221, 0.5);
`;

type BackdropProps = {
  show: boolean;
};

export const BackdropLoading = ({ show }: BackdropProps) => {
  return (
    <>
      {show && (
        <BackdropComponent>
          <LoadingIcon hasBackdrop={true} />
        </BackdropComponent>
      )}
    </>
  );
};
