import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MenuLinks } from "../MenuLinks";

interface IFormData {
  name?: string;
  lastName?: string;
  message?: string;
}

import {
  FormControl,
  Button,
  Grid,
  Container,
  Box as MuiBox,
  Typography,
  TextField,
} from "@material-ui/core";

export const ContactUs: React.FC = () => {
  const [values, setValues] = React.useState<IFormData>({
    name: "",
    lastName: "",
    message: "",
  });

  const handleChange =
    (prop: keyof IFormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <BoxStyled>
      <Container maxWidth="lg">
        <GridContent container>
          <GridLinks sm={3} xs={12} item>
            <MenuLinks />
          </GridLinks>
          <GridForm sm={9} container item >
            <Grid sm={12} item>
              <Typography variant="h3" color="textPrimary">
                Fale Conosco
              </Typography>
            </Grid>
            <GridInputs sm={12} item>
              <GridText sm={8} item>
                <Typography variant="h5" color="textPrimary">
                  Enviar Mensagem
                </Typography>
              </GridText>
              <GridText sm={12} item>
                <Typography variant="inherit" color="textPrimary">
                  Preencha o formulário abaixo para enviar uma mensagem para o
                  CoteCerto, responderemos em até 24 horas.
                </Typography>
              </GridText>
              <FormControl>
                <GridInput sm={12} container item spacing={2}>
                  <Grid sm={6} xs={12} item>
                    <CustomTextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="name"
                      label="Nome"
                      name="name"
                      autoComplete="name"
                      autoFocus
                      onChange={handleChange("name")}
                      value={values.name}
                    />
                  </Grid>
                  <Grid sm={6} xs={12} item>
                    <CustomTextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="lastName"
                      label="Nome"
                      name="last name"
                      autoComplete="name"
                      autoFocus
                      onChange={handleChange("lastName")}
                      value={values.lastName}
                    />
                  </Grid>
                  <Grid sm={12} xs={12} item>
                    <CustomTextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="Message"
                      label="Message"
                      name="Message"
                      autoComplete="Message"
                      autoFocus
                      multiline
                      rows={4}
                      onChange={handleChange("message")}
                      value={values.message}
                    />
                  </Grid>
                  <GridButtom sm={12} xs={12} item>
                    <Button size="large" variant="contained" color="primary">
                      <Typography variant="body2">
                        <b>Enviar</b>
                      </Typography>
                    </Button>
                  </GridButtom>
                </GridInput>
              </FormControl>
            </GridInputs>
          </GridForm>
        </GridContent>
      </Container>
    </BoxStyled>
  );
};

const BoxStyled = styled(MuiBox)`
  background-color: ${(props) => props.theme.palette.grey[200]};
  padding-top: 1rem;
  margin-bottom: -20px;
`;

const GridLinks = styled(Grid)`
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
  text-align: left;
  height: 255px;
  ol {
    margin-top: 1rem;
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        height: 290px;
      }
      ${props.theme.breakpoints.down("xs")} {
        margin-bottom: 2rem;
        height: auto;
      }
    `}
`;
const GridText = styled(Grid)`
  padding: 0 0 1rem 0;
`;

const GridForm = styled(Grid)`
  padding-left: 3rem;
  margin: 0 0 2rem 0;
`;

const GridInputs = styled(Grid)`
  margin-top: 2rem;
  padding: 1.5rem 1rem 2rem 2rem;
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
`;

const GridInput = styled(Grid)``;

const CustomTextField = styled(TextField)`
  background-color: ${(props) => props.theme.palette.grey[200]};
  .MuiFormLabel-root {
    color: ${(props) => props.theme.palette.common.black};
  }
`;

const GridButtom = styled(Grid)`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        display: flex;
        justify-content: center;
      }
    `}
`;

const GridContent = styled(Grid)`
  padding: 2rem 0 2rem 0;
`;
