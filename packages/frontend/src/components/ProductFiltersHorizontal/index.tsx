import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Box as MuiBox } from "@material-ui/core";

import { Selects } from "./Selects";
import { Switch } from "./Switch";

export const ProductFiltersHorizontal: React.FC = () => {
  return (
    <CustomBox my={4}>
      <Switch />
      <Selects />
    </CustomBox>
  );
};

const CustomBox = styled(MuiBox)`
  gap: 1rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto 1fr;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
      }
    `}
`;
