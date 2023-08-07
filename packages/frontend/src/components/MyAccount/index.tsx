import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MenuLinksIcons } from "../MenuLinksIcons";

interface IFormData {
  name?: string;
  email?: string;
  fone?: string;
}

import {
  OutlinedInput,
  FormControl,
  Select,
  Button,
  Grid,
  Container,
  Box as MuiBox,
  Typography,
  InputLabel,
} from "@material-ui/core";

const categories = [
  {
    name: undefined,
  },
  {
    id: 1,
    name: "SP",
  },
  {
    id: 2,
    name: "RJ",
  },
  {
    id: 3,
    name: "MG",
  },
  {
    id: 3,
    name: "AM",
  },
  {
    id: 4,
    name: "MA",
  },
];

const citys = [
  {
    name: undefined,
  },
  {
    id: 1,
    name: "SP",
  },
  {
    id: 2,
    name: "RJ",
  },
  {
    id: 3,
    name: "MG",
  },
  {
    id: 3,
    name: "AM",
  },
  {
    id: 4,
    name: "MA",
  },
];

export const MyAccount: React.FC = () => {
  const [values, setValues] = React.useState<IFormData>({
    name: "",
    email: "",
    fone: "",
  });
  const [item, setItem] = React.useState("");

  const handleChangeDropdow = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setItem(event.target.value as string);
  };

  const handleChange =
    (prop: keyof IFormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <BoxStyled>
      <Container maxWidth="lg">
        <GridContent container>
          <GridLinks sm={3} xs={12} item spacing={4}>
            <MenuLinksIcons />
          </GridLinks>
          <GridForm sm={9} container item>
            <Grid sm={6} xs={6} item>
              <Typography variant="h3" color="textPrimary">
                Minha conta
              </Typography>
            </Grid>
            <GridButtom sm={6} xs={6} item>
              <Button size="large" variant="contained" color="primary">
                <Typography variant="body2">
                  <b>Salvar</b>
                </Typography>
              </Button>
            </GridButtom>
            <GridInputs sm={12} xs={12} item>
              <GridInputName container item>
                <GridText sm={2} xs={3} item>
                  <Typography variant="inherit" color="textPrimary">
                    Nome
                  </Typography>
                </GridText>
                <Grid sm={10} xs={9} item>
                  <FormControl fullWidth variant="outlined">
                    <CustomInputField
                      id="outlined-adornment-name"
                      value={values.name}
                      onChange={handleChange("name")}
                    />
                  </FormControl>
                </Grid>
              </GridInputName>

              <GridInput container item>
                <GridText sm={2} xs={3} item>
                  <Typography variant="inherit" color="textPrimary">
                    E-mail
                  </Typography>
                </GridText>
                <Grid sm={10} xs={9} item>
                  <FormControl fullWidth variant="outlined">
                    <CustomInputField
                      id="outlined-adornment-email"
                      value={values.email}
                      onChange={handleChange("email")}
                    />
                  </FormControl>
                </Grid>
              </GridInput>
              <GridInput container item>
                <GridText sm={2} xs={3} item>
                  <Typography variant="inherit" color="textPrimary">
                    Telefone
                  </Typography>
                </GridText>
                <Grid sm={10} xs={9} item>
                  <FormControl fullWidth variant="outlined">
                    <CustomInputField
                      id="outlined-adornment-fone"
                      value={values.fone}
                      onChange={handleChange("fone")}
                    />
                  </FormControl>
                </Grid>
              </GridInput>
              <GridInput container item>
                <GridText sm={2} xs={3} item>
                  <Typography variant="inherit" color="textPrimary">
                    Estado
                  </Typography>
                </GridText>
                <Grid sm={10} xs={9} item>
                  <FormControl fullWidth variant="filled">
                    <Label>
                      <Typography variant="body2" color="textPrimary">
                        Selecione
                      </Typography>
                    </Label>
                    <SelectStyled native onChange={handleChangeDropdow}>
                      {citys.map((c, index) => (
                        <option key={index} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </SelectStyled>
                  </FormControl>
                </Grid>
              </GridInput>
              <GridDrop container item>
                <GridText sm={2} xs={3} item>
                  <Typography variant="inherit" color="textPrimary">
                    Cidade
                  </Typography>
                </GridText>
                <Grid sm={10} xs={9} item>
                  <FormControl fullWidth variant="filled">
                    <Label>
                      <Typography variant="body2" color="textPrimary">
                        Selecione
                      </Typography>
                    </Label>
                    <SelectStyled native onChange={handleChangeDropdow}>
                      {categories.map((c, index) => (
                        <option key={index} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </SelectStyled>
                  </FormControl>
                </Grid>
              </GridDrop>
            </GridInputs>
          </GridForm>
        </GridContent>
      </Container>
    </BoxStyled>
  );
};

const CustomInputField = styled(OutlinedInput)`
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.palette.grey[200]};
`;

const BoxStyled = styled(MuiBox)`
  background-color: ${(props) => props.theme.palette.grey[200]};
  padding-top: 1rem;
  margin-bottom: -20px;
`;

const GridText = styled(Grid)`
  padding-top: 1rem;
`;

const GridInput = styled(Grid)`
  padding: 0rem 1rem 0 1rem;
`;

const GridInputName = styled(Grid)`
  padding: 2rem 1rem 0 1rem;
`;

const GridDrop = styled(Grid)`
  padding: 18px 1rem 2rem 1rem;
`;

const GridLinks = styled(Grid)`
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
  text-align: left;
  height: 225px;
  ol {
    margin-top: 1rem;
    padding-left: 1rem;
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        height: 270px;
      }
      ${props.theme.breakpoints.down("xs")} {
        margin-bottom: 1rem;
        height: auto;
      }
    `}
`;

const GridForm = styled(Grid)`
  padding: 0 0 0 2rem;
  margin: 0 0 3rem 0;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding-left: 0;
      }
    `}
`;

const GridInputs = styled(Grid)`
  margin-top: 1rem;
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
`;

const CustomLabel = styled(InputLabel)`
  color: ${(props) => props.theme.palette.grey[200]};
`;
const GridButtom = styled(Grid)`
  text-align: right;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        justify-content: center;
      }
    `}
`;
const GridContent = styled(Grid)`
  padding: 2rem 0 2rem 0;
`;

const SelectStyled = styled(Select)`
  border-radius: 4px;
  background-color: ${(props) => props.theme.palette.grey[200]};
  .MuiSvgIcon-root {
    color: ${(props) => props.theme.palette.text.primary};
  }
`;

const Label = styled(InputLabel)`
  color: ${(props) => props.theme.palette.text.primary};
`;
