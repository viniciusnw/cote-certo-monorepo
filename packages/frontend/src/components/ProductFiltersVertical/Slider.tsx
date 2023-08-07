import React from "react";
import styled from "@emotion/styled";
import { Box, Slider as MuiSlider, Typography } from "@material-ui/core";

import { formatCurrency } from "../../utils";

export const Slider: React.FC = () => {
  const [state, setState] = React.useState(1000);

  const handleChange = (value: number | number[]) => {
    if (typeof value === "number") setState(value);
  };

  return (
    <Box my={2}>
      <Box my={2}>
        <Typography variant="h5" color="textPrimary">
          Preço
        </Typography>
      </Box>
      <Box my={2}>
        <Typography variant="h3" color="textPrimary">
          {formatCurrency(state)}
        </Typography>
      </Box>
      <CustomSlider
        min={100}
        max={86000}
        defaultValue={1000}
        valueLabelDisplay="off"
        onChange={(e, value) => handleChange(value)}
      />
      <BoxIntervalValues my={1}>
        <Typography variant="body2" color="textPrimary">
          {formatCurrency(100)}
        </Typography>
        <Typography align="right" variant="body2" color="textPrimary">
          {formatCurrency(86000)}
        </Typography>
      </BoxIntervalValues>
    </Box>
  );
};

const BoxIntervalValues = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CustomSlider = styled(MuiSlider)`
  .MuiSlider-rail {
    background-color: ${(props) => props.theme.palette.grey[400]};
    height: 3px;
    border-radius: 1px;
  }
  .MuiSlider-track {
    background-color: ${(props) => props.theme.palette.primary.main};
    height: 3px;
    border-radius: 1px;
  }
  .MuiSlider-thumb {
    height: 17px;
    width: 17px;
    margin-top: -7px;
  }
`;
