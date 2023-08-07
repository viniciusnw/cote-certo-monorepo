import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import styled from "@emotion/styled";
import * as yup from "yup";
import { Button, Typography, Link, Divider } from "@material-ui/core";
import { SHOPPER_AREA } from "../../router/routes";
import {
  useUserLoginMutation,
} from "../../data/user/userLoginMutation";
import { LoadingIcon } from "../../components";
import { TextField } from "../../components/@base/TextField/TextField";
import { PasswordField } from "../../components/@base/TextField/PasswordField";
import logo from '../../assets/images/logo.svg';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoggingIn, loginError } = useUserLoginMutation();

  const FormLoginSchema = yup.object().shape({
    email: yup.string().required("Preencha seu e-mail."),
    password: yup.string().required("Preencha sua senha."),
  });

  enum Fields {
    email = "email",
    password = "password",
  }

  const formik = useFormik({
    initialValues: {
      [Fields.email]: "",
      [Fields.password]: "",
    },
    validationSchema: FormLoginSchema,
    onSubmit: async (values) => {
      login({ email: values.email, password: values.password })
        .then(() => {
          navigate(SHOPPER_AREA);
        })
        .catch((message) => console.error(message));
    },
  });

  return (
    <Background>
      <div style={{
        gridRow: '1 / 4',
      }} />

      <Logo>
        <img src={logo} alt="logo" />
      </Logo>

      <Typography align='center' variant="caption">
        <b>Area do lojista</b>
      </Typography>

      <LoginBox>
        <StyledForm onSubmit={formik.handleSubmit}>
          <TextField
            id="user"
            label="E-mail"
            variant="outlined"
            error={!!loginError}
            value={formik.values.email}
            onChange={formik.handleChange(Fields.email)}
            onBlur={formik.handleBlur(Fields.email)}
            errorText={formik.errors[Fields.email]}
            isTouched={formik.touched[Fields.email]}
          />
          <PasswordField
            id="password"
            label="Senha"
            variant="outlined"
            error={!!loginError}
            value={formik.values.password}
            onChange={formik.handleChange(Fields.password)}
            onBlur={formik.handleBlur(Fields.password)}
            errorText={formik.errors[Fields.password]}
            isTouched={formik.touched[Fields.password]}
          />

          {loginError && (
            <Typography variant="caption" color="error">
              {loginError.message}
            </Typography>
          )}

          <ActionsContent>
            <Button size='large' type="submit" variant="contained" color="secondary">
              {isLoggingIn ? <LoadingIcon /> :
                <Typography variant='body2'>
                  Continuar
                </Typography>
              }
            </Button>

            <Link href="#" onClick={() => null}>
              <Typography align='center' variant='caption' color='textSecondary'>
                Esqueceu a senha?
              </Typography>
            </Link>
          </ActionsContent>

          <Divider light />

          <Footer>
            <Link href="#" onClick={() => null}>
              <Typography  align='center' variant='caption' color='textSecondary'>
                Ainda não possui uma conta? Cadastre-se
              </Typography>
            </Link>
          </Footer>
        </StyledForm>
      </LoginBox>
    </Background>
  );
};

const Logo = styled.div`
  text-align: center;
`;

const ActionsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = styled.div`
  padding: 0 3vw;
  text-align: center;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: repeat(12, 1fr);
  background: linear-gradient(243.18deg, #00C192 0%, #39d064 100%);
`;

const LoginBox = styled.div`
  display: flex;
  max-width: 400px;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  h3 {
    margin: 2rem 0;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  row-gap: 1rem;
  display: grid;
  max-width: 300px;
  grid-template-rows: repeat(3, auto);
`;

export default Login;
