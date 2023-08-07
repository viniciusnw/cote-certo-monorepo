import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  FormGroup,
  Typography,
  ListItemText,
  FormControlLabel,
  List as MuiList,
  Divider as MuiDivider,
} from "@material-ui/core";

import { Buttons } from "./Buttons";
import { Slider } from "./Slider";
import { CheckBox } from "./CheckBox";

export const ProductFiltersVertical: React.FC = () => {
  const brands = [
    {
      id: 1,
      name: "Samsung",
    },
    {
      id: 2,
      name: "LG",
    },
    {
      id: 3,
      name: "AOC",
    },
    {
      id: 3,
      name: "Sharp",
    },
    {
      id: 3,
      name: "Panasonic",
    },
  ];

  const resolution = [
    {
      id: 1,
      name: "Full HD",
    },
    {
      id: 2,
      name: "QHD",
    },
    {
      id: 3,
      name: "UHD/4k",
    },
    {
      id: 3,
      name: "8k",
    },
  ];
  
  return (
    <Container>
      <Buttons />

      <Box my={6}>
        <Typography variant="h3" color="textPrimary">
          Filtros de produto
        </Typography>
      </Box>

      <Slider />
      <Divider light />

      <Typography variant="h5" color="textPrimary">
        Ordenar por:
      </Typography>
      <BoxOrderBy>
        <ListItemText>
          <Typography variant="body2" color="textPrimary">
            Menores valores antes
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography variant="body2" color="textPrimary">
            Maiores valores primeiro
          </Typography>
        </ListItemText>
      </BoxOrderBy>
      <Divider light />
      <Box>
        <Typography variant="h5" color="textPrimary">
          Marcas:
        </Typography>
      </Box>
      <CheckboxGroup>
        {brands.map((value, index) => (
          <CheckboxLabel
            key={index}
            control={<CheckBox />}
            label={value.name}
          />
        ))}
      </CheckboxGroup>
      <Divider light />
      <Box>
        <Typography variant="h5" color="textPrimary">
          Resolução:
        </Typography>
      </Box>
      <CheckboxGroup>
        {resolution.map((value, index) => (
          <CheckboxLabel
            key={index}
            control={<CheckBox />}
            label={value.name}
          />
        ))}
      </CheckboxGroup>
      <Divider light />
      <Typography variant="h5" color="textPrimary">
        Tamanho de tela:
      </Typography>
      <BoxOrderBy>
        <ListItemText>
          <Typography variant="body2" color="textPrimary">
            Menos de 40"
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography variant="body2" color="textPrimary">
            40" até 48"
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography variant="body2" color="textPrimary">
            50"até 65"
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography variant="body2" color="textPrimary">
            Mais de 65"
          </Typography>
        </ListItemText>
      </BoxOrderBy>
    </Container>
  );
};

const Container = styled.div`
  
`;

const BoxOrderBy = styled(MuiList)`
  padding-bottom: 0rem;
`;

const CheckboxLabel = styled(FormControlLabel)`
  .MuiTypography-body1 {
    color: black;
    font-size: 1rem;
  }
`;
const CheckboxGroup = styled(FormGroup)`
  .MuiFormControlLabel-root {
    margin-bottom: -16px;
  }
`;

const Divider = styled(MuiDivider)`
  height: 3px;
  border-radius: 1px;
  margin: 2rem 0 2rem 0;
`;
