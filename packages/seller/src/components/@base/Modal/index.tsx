import React, { ReactNode } from 'react';

import {
  Dialog,
  DialogActions,
  IconButton,
  DialogProps,
  Typography,
} from '@material-ui/core';
import styled from '@emotion/styled';
import { Close as CloseIcon } from '@material-ui/icons';

type ModalProps = Omit<DialogProps, 'onClose'> & {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  titleIcon?: ReactNode;
  actions?: Array<ReactNode>;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
};

export function Modal({
  open,
  titleIcon,
  onClose,
  title,
  children,
  actions,
  size,
}: ModalProps) {
  return (
    <Dialog maxWidth={size} open={open} onClose={onClose}>
      <DialogTitleContainer>
        <TitleContainer>
          <Typography color='textPrimary' variant="subtitle1">{title}</Typography>
          {titleIcon && titleIcon}
        </TitleContainer>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitleContainer>
      {children}
      {actions && <DialogActionsStyled>{actions}</DialogActionsStyled>}
    </Dialog>
  );
};

const TitleContainer = styled.div`
  display: grid;
  column-gap: 1rem;
  white-space: nowrap;
  grid-template-columns: auto 1fr;
`;

const DialogTitleContainer = styled.div`
  display: grid;
  padding: 1rem;
  align-items: center;
  grid-template-columns: 1fr auto;
  border-bottom: 1px solid ${props => props.theme.palette.grey[400]};
`;

const DialogActionsStyled = styled(DialogActions)`
  padding: 1rem;
  justify-content: space-around;
  border-top: 1px solid ${props => props.theme.palette.grey[400]};
`;

export default Modal;
