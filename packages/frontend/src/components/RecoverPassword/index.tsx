import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "../Link";
import {
  Divider,
  FormControl,
  Button,
  Grid,
  Container,
  Box as MuiBox,
  Typography,
  OutlinedInput,
  InputLabel,
} from "@material-ui/core";

interface State {
  email?: string;
}

export const RecoverPassword: React.FC = () => {
  const [values, setValues] = React.useState<State>({
    email: "",
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <BoxStyled>
      <Container maxWidth="lg">
        <GridContent container>
          <GridForm sm={6} container item spacing={10}>
            <GridInputs sm={12} item>
              <GridHeader sm={12} item>
                <Typography variant="h3" color="textPrimary">
                  Recuperar senha
                </Typography>
              </GridHeader>
              <GridSubHeader sm={12} item>
                <Typography variant="inherit" color="textPrimary">
                  Informe seu e-mail para receber instruções para redefinir a
                  sua senha.
                </Typography>
              </GridSubHeader>
              <Grid sm={12} item>
                <FormControl fullWidth variant="outlined">
                  <CustomLabel htmlFor="outlined-adornment-email">
                    E-mail
                  </CustomLabel>
                  <CustomInputField
                    id="outlined-adornment-email"
                    value={values.email}
                    onChange={handleChange("email")}
                    labelWidth={55}
                  />
                </FormControl>
              </Grid>

              <GridBelow container item>
                <Grid sm={12} xs={12} item>
                  <Button size="large" variant="contained" color="primary">
                    <Typography variant="body2">
                      <b>Enviar</b>
                    </Typography>
                  </Button>
                </Grid>
                <GridDivider sm={12} xs={12} item>
                  <Divider light />
                </GridDivider>
                <GridBackToLogin sm={12} xs={12} item>
                  <Grid item>
                    <Link href="">
                      <Typography variant="inherit" color="textPrimary">
                        Voltar para Login
                      </Typography>
                    </Link>
                  </Grid>
                </GridBackToLogin>
              </GridBelow>
            </GridInputs>
          </GridForm>
        </GridContent>
      </Container>
    </BoxStyled>
  );
};

const BoxStyled = styled(MuiBox)`
  justify-content: center;
  background-color: ${(props) => props.theme.palette.grey[200]};
  padding-top: 1rem;
  margin-bottom: -20px;
`;

const GridHeader = styled(Grid)`
  text-align: center;
  padding: 0 0 1rem 0;
`;

const GridSubHeader = styled(Grid)`
  text-align: center;
  padding: 0 0 1rem 0;
`;

const GridForm = styled(Grid)`
  margin: 0 0 2rem 0;
`;

const GridBackToLogin = styled(Grid)`
  text-align: center;
`;

const GridInputs = styled(Grid)`
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
`;

const CustomLabel = styled(InputLabel)`
  color: ${(props) => props.theme.palette.common.black};
`;

const CustomInputField = styled(OutlinedInput)`
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.palette.grey[200]};
  .MuiFormLabel-root {
    color: ${(props) => props.theme.palette.common.black};
  }
`;

const GridBelow = styled(Grid)`
  align-items: center;
  padding-top: 0.5rem;
`;

const GridContent = styled(Grid)`
  padding: 2rem 0 2rem 0;
  justify-content: center;
`;

const GridDivider = styled(Grid)`
  padding: 2rem 0 2rem 0;
`;
