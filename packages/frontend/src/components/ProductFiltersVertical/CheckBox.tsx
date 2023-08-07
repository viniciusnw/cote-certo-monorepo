import React from "react";
import styled from "@emotion/styled";
import { Checkbox as MuiCheckbox } from "@material-ui/core";

export const CheckBox: React.FC = () => {
  const [state, setState] = React.useState(true);

  const handleChange = () => setState(!state);

  return <GreenCheckbox checked={state} onChange={handleChange} />;
};

const GreenCheckbox = styled(MuiCheckbox)`
  .MuiSvgIcon-root {
    width: 1.5em;
    height: 1.5em;
    border-radius: 10%;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
