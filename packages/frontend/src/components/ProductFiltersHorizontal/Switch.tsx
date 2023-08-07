import React from "react";

import {
  Box,
  Grid,
  Switch as MuiSwitch,
  Typography,
  FormGroup,
} from "@material-ui/core";

export const Switch: React.FC = () => {
  const [state, setState] = React.useState(true);

  const handleChange = () => {
    setState(!state);
  };
  return (
    <FormGroup>
      <Grid container alignItems="center">
        <Box my={1}>
          <Grid item>
            <Typography variant="body2" color="textPrimary">
              Frete gratis
            </Typography>
          </Grid>
        </Box>
        <Box my={1}>
          <Grid item>
            <MuiSwitch
              size="small"
              color="primary"
              checked={state}
              onChange={handleChange}
            />
          </Grid>
        </Box>
      </Grid>
    </FormGroup>
  );
};
