import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Select as MuiSelect,
  Box as MuiBox,
  FormControl,
  InputLabel,
  Typography,
} from "@material-ui/core";

const categories = [
  {
    name: undefined,
  },
  {
    id: 1,
    name: "Televisores",
  },
  {
    id: 2,
    name: "Videogames",
  },
  {
    id: 3,
    name: "impressoras",
  },
  {
    id: 3,
    name: "Smartphone",
  },
  {
    id: 3,
    name: "Microondas",
  },
];
const proximity = [
  {
    name: undefined,
  },
  {
    id: 1,
    distance: "1km",
  },
  {
    id: 2,
    distance: "5km",
  },
  {
    id: 3,
    distance: "10km",
  },
];
const states = [
  {
    name: undefined,
  },
  {
    id: 1,
    name: "SP",
  },
  {
    id: 2,
    name: "MG",
  },
  {
    id: 3,
    name: "AM",
  },
  {
    id: 3,
    name: "MA",
  },
];
const brands = [
  {
    name: undefined,
  },
  {
    id: 1,
    name: "Samsung",
  },
  {
    id: 2,
    name: "Apple",
  },
  {
    id: 3,
    name: "Sony",
  },
];

export const Selects: React.FC = () => {
  const [item, setItem] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setItem(event.target.value as string);
  };

  return (
    <Box>
      <FormControl variant="filled">
        <Label>
          <Typography variant="body2" color="textPrimary">
            Categoria
          </Typography>
        </Label>
        <SelectStyled native onChange={handleChange}>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </SelectStyled>
      </FormControl>
      <FormControl variant="filled">
        <Label>
          <Typography variant="body2" color="textPrimary">
            Proximidade
          </Typography>
        </Label>
        <SelectStyled native onChange={handleChange}>
          {proximity.map((item, index) => (
            <option key={index} value={item.distance}>
              {item.distance}
            </option>
          ))}
        </SelectStyled>
      </FormControl>
      <FormControl variant="filled">
        <Label>
          <Typography variant="body2" color="textPrimary">
            Estado
          </Typography>
        </Label>
        <SelectStyled native onChange={handleChange}>
          {states.map((state, index) => (
            <option key={index} value={state.name}>
              {state.name}
            </option>
          ))}
        </SelectStyled>
      </FormControl>
      <FormControl variant="filled">
        <Label>
          <Typography variant="body2" color="textPrimary">
            Marcas
          </Typography>
        </Label>
        <SelectStyled native onChange={handleChange}>
          {brands.map((brand, index) => (
            <option key={index} value={brand.name}>
              {brand.name}
            </option>
          ))}
        </SelectStyled>
      </FormControl>
      <FormControl variant="filled">
        <Label>
          <Typography variant="body2" color="textPrimary">
            Filtros
          </Typography>
        </Label>
        <SelectStyled native onChange={handleChange}>
          <option>Ver todos</option>
        </SelectStyled>
      </FormControl>
    </Box>
  );
};

const Box = styled(MuiBox)`
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
      }
      ${props.theme.breakpoints.down("xs")} {
        grid-template-columns: repeat(2, 1fr);
      }
    `}
`;

const Label = styled(InputLabel)`
  color: ${(props) => props.theme.palette.text.primary};
`;

const SelectStyled = styled(MuiSelect)`
  border-radius: 4px;
  background-color: ${(props) => props.theme.palette.grey[200]};
  .MuiSvgIcon-root {
    color: ${(props) => props.theme.palette.text.primary};
  }
`;
