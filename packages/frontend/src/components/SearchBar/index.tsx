import React from "react";
import styled from "@emotion/styled";
import { Search as SearchIcon } from "@material-ui/icons";
import { Paper, InputBase, IconButton } from "@material-ui/core";

export const SearchBar: React.FC = () => {
  
  return (
    <Container
      elevation={0}
      component="form"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputSearch
        placeholder="Pesquise produtos com preço baixo..."
        inputProps={{ "aria-label": "pesquise produtos com preço baixo..." }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon color="primary" />
      </IconButton>
    </Container>
  );
};

const Container = styled(Paper)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const InputSearch = styled(InputBase)`
  width: 100%;
  min-height: 54px;
  border-radius: 10px;
  padding: 0 ${(props) => `${props.theme.spacing(0.1)}rem`};
`;

{
  /* <Autocomplete
  inputValue={inputValue}
  onInputChange={(e) => setinputValue(event.target.value)}
  id="combo-box-demo"
  options={values}
  getOptionLabel={(option) => option}
  style={{ width: 300 }}
  renderInput={(params) => (
    <TextField {...params} label="Combo box" variant="outlined" />
  )}
  open={inputValue.length > 2}
/>; */
}
