import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Typography } from "@material-ui/core";

import { Link } from "../Link";

export const Example: React.FC = () => {
  return (
    <Container>
      <div></div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
      }
      ${props.theme.breakpoints.down("xs")} {
      }
    `}
`;
