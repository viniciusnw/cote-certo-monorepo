import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  FormControl,
  Button,
  Grid,
  Typography,
  InputAdornment,
} from "@material-ui/core";

import { TextField } from "../../components/@base/TextField/TextField";
import { FileUpload } from "../../components/@base/FileUpload";
import { AutoComplete } from "../../components/@base/AutoComplete";


const categories = [
  { title: "VideoGames", id: 1994 },
  { title: "Televisoes", id: 1972 },
  { title: "Hardware", id: 1974 },
  { title: "Refrigeradores", id: 2008 },
  { title: "Eletrodomesticos", id: 1957 },
  { title: "Celulares", id: 1993 },
  { title: "Fogões", id: 1994 },
  { title: "Notebooks", id: 2003 },
  { title: "Ferramentas", id: 1966 },
  { title: "Maquinas de lavar", id: 1999 },
  { title: "Secadoras", id: 2001 },
  { title: "Saude", id: 1980 },
  { title: "Industria", id: 1994 },
  { title: "Comercio", id: 2010 },
  { title: "Beleza", id: 2002 },
  { title: "Moda", id: 1975 },
  { title: "Tecnologia", id: 1990 },
];

const brands = [
  { title: "Sony", id: 1994 },
  { title: "LG", id: 1972 },
  { title: "Apple", id: 1974 },
  { title: "HiperX", id: 2008 },
  { title: "Intel", id: 1957 },
  { title: "Dell", id: 1993 },
  { title: "Motorola", id: 1994 },
  { title: "Acer", id: 2003 },
  { title: "Asus", id: 1966 },
  { title: "Huawei", id: 1999 },
  { title: "Samsung", id: 2001 },
  { title: "Multilaser", id: 1980 },
  { title: "Nokia", id: 1994 },
  { title: "Philips", id: 2010 },
  { title: "Microsoft", id: 2002 },
  { title: "Nintendo", id: 1975 },
  { title: "Kingston", id: 1990 },
];

export const ProductForm: React.FC = () => {
  return (
    <>
      <Grid container>
        <GridTitle sm={6} xs={12} item>
          <Typography variant="h3" color="textPrimary">
            Produto{" "}
            <Typography variant="inherit" color="textSecondary">
              #8953761
            </Typography>
          </Typography>
        </GridTitle>

        <GridButtons sm={6} xs={12} item>
          <ActionButtons>
            <Button variant="contained" color="inherit">
              <Typography variant="body2">
                <b>Cancelar</b>
              </Typography>
            </Button>
            <Button variant="contained" color="secondary">
              <Typography variant="body2">
                <b>Salvar</b>
              </Typography>
            </Button>
          </ActionButtons>
        </GridButtons>

        <Grid xs={12} item>
          <InputsContainer>
            <FormControl>
              <TextFieldStyled label="Nome" variant="outlined" />
            </FormControl>

            <FormControl>
              <AutoComplete multiple items={categories} label="Categorias" />
            </FormControl>

            <FormControl>
              <AutoComplete items={brands} label="Marca" />
            </FormControl>

            <FormControl>
              <Typography variant="body1" color="textPrimary">
                Imagens:{" "}
              </Typography>
            </FormControl>

            <FormControl>
              <FileUpload multiple={true} />
            </FormControl>

            <FormControl>
              <TextFieldStyled
                type="number"
                label="Quantidade"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">un</InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <HalfInputsContainer>
              <FormControl>
                <TextFieldStyled
                  type="number"
                  label="Peso"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                  }}
                />
              </FormControl>

              <FormControl>
                <TextFieldStyled
                  type="number"
                  label="Altura"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">cm</InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </HalfInputsContainer>

            <HalfInputsContainer>
              <FormControl>
                <TextFieldStyled
                  type="number"
                  label="Largura"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">cm</InputAdornment>
                    ),
                  }}
                />
              </FormControl>

              <FormControl>
                <TextFieldStyled
                  type="number"
                  variant="outlined"
                  label="Comprimento"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">cm</InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </HalfInputsContainer>
          </InputsContainer>
        </Grid>
      </Grid>
    </>
  );
};

const TextFieldStyled = styled(TextField)`
  background-color: ${(props) => props.theme.palette.grey[100]};
`;

const InputsContainer = styled.div`
  gap: 0.8rem;
  display: grid;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.palette.common.white};
`;

const HalfInputsContainer = styled.div`
  gap: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const GridButtons = styled(Grid)`
  justify-content: flex-end;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        justify-content: flex-start;
        margin-top: 1rem;
      }
    `}
`;

const GridTitle = styled(Grid)`
  align-self: center;
`;

const ActionButtons = styled.div`
  gap: 0.5rem;
  display: grid;
  justify-content: end;
  grid-template-columns: min-content min-content;
`;