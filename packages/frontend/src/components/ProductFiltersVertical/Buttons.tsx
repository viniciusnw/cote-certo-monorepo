import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  Typography,
  Box as MuiBox,
  Icon as MuiIcon,
} from "@material-ui/core";

import {
  FavoriteBorder as FavoriteBorderIcon,
  Refresh as RefreshIcon,
} from "@material-ui/icons";

export const Buttons: React.FC = () => {
  return (
    <Box>
      <CleanButtom size="medium" color="inherit">
        <Icon>
          <RefreshIcon />
        </Icon>
        <Typography variant="body2">Limpar</Typography>
      </CleanButtom>
      <SaveButtom size="medium" variant="contained" color="primary">
        <Icon>
          <FavoriteBorderIcon color="inherit" />
        </Icon>
        <Typography variant="body2">Salvar</Typography>
      </SaveButtom>
    </Box>
  );
};

const Box = styled(MuiBox)`
  display: grid;
  column-gap: 1rem;
  margin-bottom: 20px;
  grid-template-columns: 1fr 1fr;
`;

const Icon = styled(MuiIcon)`
  display: flex;
  padding-right: 2rem;
  color: ${(props) => props.theme.palette.common.white};
`;

const SaveButtom = styled(Button)`
  padding: 0.4rem 1rem;
  .MuiButton-label {
    font-weight: 600;
  }
`;

const CleanButtom = styled(Button)`
  padding: 0.4rem 1rem;
  .MuiButton-label {
    font-weight: 600;
  }
`;
