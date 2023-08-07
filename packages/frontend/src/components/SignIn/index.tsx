import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "../Link";
import {
  Divider,
  FormControl,
  Button,
  Grid,
  Container,
  Box as MuiBox,
  Typography,
  IconButton,
  OutlinedInput,
  InputLabel,
} from "@material-ui/core";

interface State {
  name?: string;
  password?: string;
}

export const SignIn: React.FC = () => {
  const [visiblePass, setVisiblePass] = React.useState<boolean>(false);

  const [values, setValues] = React.useState<State>({
    name: "",
    password: "",
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
              <GridText sm={12} item>
                <Typography variant="h3" color="textPrimary">
                  Login
                </Typography>
              </GridText>
              <Grid sm={12} item>
                <FormControl fullWidth variant="outlined">
                  <CustomLabel htmlFor="outlined-adornment-password">
                    Usuario
                  </CustomLabel>
                  <CustomInputField
                    id="outlined-adornment-name"
                    value={values.name}
                    onChange={handleChange("name")}
                    labelWidth={75}
                  />
                </FormControl>
              </Grid>
              <Grid sm={12} item>
                <FormControl fullWidth variant="outlined">
                  <CustomLabel htmlFor="outlined-adornment-password">
                    Senha
                  </CustomLabel>
                  <CustomInputField
                    id="outlined-adornment-password"
                    type={visiblePass ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setVisiblePass(!visiblePass)}
                          edge="end"
                        >
                          {visiblePass ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={75}
                  />
                </FormControl>
              </Grid>
              <GridBelow container item>
                <Grid sm={4} xs={3} item>
                  <Button size="large" variant="contained" color="primary">
                    <Typography variant="body2">
                      <b>Continuar</b>
                    </Typography>
                  </Button>
                </Grid>
                <GridForgotPassword sm={8} xs={9} item>
                  <Link href="">
                    <Typography variant="inherit" color="textPrimary">
                      Esqueceu a senha ?
                    </Typography>
                  </Link>
                </GridForgotPassword>
                <GridDivider sm={12} xs={12} item>
                  <Divider light />
                </GridDivider>
                <GridRegister sm={12} xs={12} item>
                  <Grid item>
                    <Typography variant="inherit" color="textPrimary">
                      Ainda não possui uma conta?
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Link href="">
                      <Typography variant="inherit" color="textPrimary">
                        Cadastre-se
                      </Typography>
                    </Link>
                  </Grid>
                </GridRegister>
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

const GridText = styled(Grid)`
  text-align: center;
  padding: 0 0 1rem 0;
`;

const GridForm = styled(Grid)`
  margin: 0 0 2rem 0;
`;
const GridForgotPassword = styled(Grid)`
  text-align: right;
`;

const GridRegister = styled(Grid)`
  text-align: center;
  margin-bottom: 1rem;
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
