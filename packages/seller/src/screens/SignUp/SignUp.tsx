import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import styled from "@emotion/styled";
import * as yup from "yup";
import { Button, Typography, Divider, Link } from "@material-ui/core";
import {
  useUserRegisterMutation,
} from "../../data/user/userRegisterMutation";
import { LoadingIcon } from "../../components";
import { TextField } from "../../components/@base/TextField/TextField";
import { PasswordField } from "../../components/@base/TextField/PasswordField";
import logo from '../../assets/images/logo.svg';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const { register, isRegisting, registerError } = useUserRegisterMutation();

  const FormLoginSchema = yup.object().shape({
    name: yup.string().required("Preencha seu nome."),
    email: yup.string().required("Preencha seu e-mail."),
    password: yup.string().required("Preencha sua senha."),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Senhas são diferentes')
  });

  enum Fields {
    name = "name",
    email = "email",
    password = "password",
    confirmPassword = "confirmPassword",
  }

  const formik = useFormik({
    initialValues: {
      [Fields.name]: "",
      [Fields.email]: "",
      [Fields.password]: "",
      [Fields.confirmPassword]: "",
    },
    validationSchema: FormLoginSchema,
    onSubmit: async (values) => {
      console.log(values)
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
        <b>Crie sua conta </b>
      </Typography>

      <LoginBox>
        <StyledForm onSubmit={formik.handleSubmit}>
          <TextField
            id="nome"
            label="Nome"
            variant="outlined"
            error={!!registerError}
            value={formik.values.name}
            onChange={formik.handleChange(Fields.name)}
            onBlur={formik.handleBlur(Fields.name)}
            errorText={formik.errors[Fields.name]}
            isTouched={formik.touched[Fields.name]}
          />

          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            error={!!registerError}
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
            error={!!registerError}
            value={formik.values.password}
            onChange={formik.handleChange(Fields.password)}
            onBlur={formik.handleBlur(Fields.password)}
            errorText={formik.errors[Fields.password]}
            isTouched={formik.touched[Fields.password]}
          />

          <PasswordField
            id="confirmPassword"
            label="Confirmar senha"
            variant="outlined"
            error={!!registerError}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange(Fields.confirmPassword)}
            onBlur={formik.handleBlur(Fields.confirmPassword)}
            errorText={formik.errors[Fields.confirmPassword]}
            isTouched={formik.touched[Fields.confirmPassword]}
          />

          {registerError && (
            <Typography variant="caption" color="error">
              {registerError.message}
            </Typography>
          )}

          <div>
            <Button type="submit" variant="contained" color="secondary">
              {isRegisting ? <LoadingIcon /> :
                <Typography variant='body1'>
                  Acessar
                </Typography>
              }
            </Button>
          </div>

          <Divider light />

          <Footer>
            <Link href="#" onClick={() => null}>
              <Typography align='center' variant='caption' color='textSecondary'>
                Voltar para Login
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

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: repeat(12, 1fr);
  background: linear-gradient(243.18deg, #00C192 0%, #39d064 100%);
`;

const Footer = styled.div`
  padding: 0 9vw;
  text-align: center;
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

export default Register;
