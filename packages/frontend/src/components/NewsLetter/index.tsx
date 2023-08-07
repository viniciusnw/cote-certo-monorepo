import React from 'react';
import styled from '@emotion/styled';
import DoneIcon from '@material-ui/icons/Done';
import {
  TextField as MuiTextField,
  Box as MuiBox,
  Typography,
  Container as MuiContainer,
  IconButton,
} from '@material-ui/core';
import { css } from '@emotion/react';

export const NewsLetter: React.FC = () => {
  return (
    <MuiBox my={10}>
      <Container maxWidth="lg">
        <MuiBox my={3}>
          <Typography align="center" variant="h2" color="textPrimary">
            Receba as melhores ofertas no email
          </Typography>
        </MuiBox>
        <TextField
          color="primary"
          InputProps={{
            endAdornment: (
              <IconButton type="submit">
                <DoneIcon color="primary" />
              </IconButton>
            ),
          }}
          label="Insira seu e-mail"
          variant="outlined"
        />
        <MuiBox my={3}>
          <Typography align="center" variant="body2" color="textPrimary">
            Ao assinar você concorda em receber nossa newsletter.
          </Typography>
        </MuiBox>
      </Container>
    </MuiBox>
  );
};

const Container = styled(MuiContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextField = styled(MuiTextField)`
  width: 60%;
  border-radius: 8px;
  box-sizing: border-box;
  .MuiFormLabel-root {
    color: ${(props) => props.theme.palette.primary.main};
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down('xs')} {
        width: 100%;
      }
    `};
`;
