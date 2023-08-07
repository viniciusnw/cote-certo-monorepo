import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  Typography,
} from "@material-ui/core";

export const Buttons: React.FC = () => {
  return (
    <Box>
      <CleanButtom size="small" color="inherit">
        <Typography variant="body2">Limpar</Typography>
      </CleanButtom>
      <SaveButtom size="small" variant="contained" color="primary">
        <Typography variant="body2">Filtrar</Typography>
      </SaveButtom>
    </Box>
  );
};

const Box = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 1fr 1fr;
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
