import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  TextField,
  FormControl,
  Button,
  Grid,
  Select,
  Typography,
} from "@material-ui/core";

import { FileUpload } from "../@base/FileUpload";
import { AutoComplete } from "../@base/AutoComplete";
import { OpeningHoursModal } from "./OpeningHoursModal";
import estadosCidades from "../../data/json/estados-cidades.json";

type StoreFormProps = {
  onCancel: () => null | void
}

export const StoreForm: React.FC<StoreFormProps> = ({ onCancel }) => {
  const [openModal, setModal] = React.useState<boolean>(false);

  const estados = estadosCidades.estados;
  const [citys, setCitys] = React.useState<Array<{ title: string, id: number }>>([]);

  const [state, setState] = React.useState<any>(null);
  const [city, setCity] = React.useState<any>(null);
  const [cnpj, setCnpj] = React.useState<string>("");
  const [telefone, setTelefone] = React.useState<string>("");
  const [cep, setCep] = React.useState<string>("");

  React.useEffect(() => {
    const s = estados.find((s) => s.sigla == state);
    if (s?.cidades) {
      setCitys(
        s.cidades.map((c, idx) => ({
          title: c,
          id: idx
        }))
      );
      setCity(null);
    }
  }, [state]);

  React.useEffect(() => {
    let v = cnpj.replace(/\D/g, "")
    v = v.replace(/^(\d{2})(\d)/, "$1.$2")
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")
    v = v.replace(/(\d{4})(\d)/, "$1-$2")
    setCnpj(v)
  }, [cnpj]);

  React.useEffect(() => {
    let x = telefone.replace(/\D/g, "");
    x = x.replace(/^(\d{2})(\d)/g, "($1) $2");
    x = x.replace(/(\d)(\d{4})$/, "$1-$2");
    setTelefone(x);
  }, [telefone]);

  React.useEffect(() => {
    let x = cep.replace(/\D/g, "");
    if (x && x.length === 8) setCep(`${x.substr(0, 5)}-${x.substr(5, 9)}`);
    else setCep(x);
  }, [cep]);
  return (
    <>
      <Grid container>
        <GridTitle sm={6} xs={12} item >
          <Typography variant="h5" color="textPrimary">
            Adicionar loja / Editar loja
          </Typography>
        </GridTitle>

        <GridButtons sm={6} xs={12} item>
          <ActionButtons>
            <Button onClick={onCancel} variant="contained" color="inherit">
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
              <TextFieldStyled
                value={cnpj}
                label="CNPJ"
                variant="outlined"
                inputProps={{ maxLength: 18 }}
                onChange={(event) => setCnpj(event.target.value)}
              />
            </FormControl>

            <FormControl>
              <TextFieldStyled label="Nome da loja" variant="outlined" />
            </FormControl>

            <FormControl>
              <TextFieldStyled label="Email" variant="outlined" />
            </FormControl>

            <FormControl>
              <Typography variant="body1" color="textPrimary">
                Logo
              </Typography>
            </FormControl>

            <FormControl>
              <FileUpload multiple={false} />
            </FormControl>

            <FormControl>
              <Typography variant="body1" color="textPrimary">
                Horários de funcionamento
              </Typography>
            </FormControl>

            <HalfInputsContainer>
              <FormControl>
                <Button onClick={() => setModal(true)} variant="contained" color="secondary">
                  <Typography variant="body2">
                    <b>Adicionar / Editar</b>
                  </Typography>
                </Button>
              </FormControl>
            </HalfInputsContainer>

            <FormControl>
              <TextFieldStyled
                value={telefone}
                label="Telefone"
                variant="outlined"
                inputProps={{ maxLength: 15 }}
                onChange={(event) => setTelefone(event.target.value)}
              />
            </FormControl>

            <HalfInputsContainer>
              <FormControl>
                <TextFieldStyled
                  value={cep}
                  label="Cep"
                  variant="outlined"
                  inputProps={{ maxLength: 8 }}
                  onChange={(event) => setCep(event.target.value)}
                />
              </FormControl>

              <FormControl>
                <TextFieldStyled label="Endereço" variant="outlined" />
              </FormControl>
            </HalfInputsContainer>

            <HalfInputsContainer>
              <SelectStyled
                native
                variant="outlined"
                onChange={(event) => setState(event.target.value)}
                inputProps={{
                  name: "estado",
                  id: "filled-estado",
                }}
              >
                <option aria-label="None" value="">
                  Estado
                </option>
                {estados.map((state) => (
                  <option key={state.sigla} value={state.sigla}>{state.nome}</option>
                ))}
              </SelectStyled>

              <form noValidate>

                <AutoComplete
                  size='medium'
                  label="Cidade"
                  items={citys}
                  initialValue={city}
                  onChange={(value) => setCity(value)}
                />
                {/* <AutocompleteStyled
                  options={citys}
                  value={city}
                  getOptionLabel={(option) => option}
                  onChange={(event, value) => setCity(value)}
                  renderOption={(option, { selected }) => (
                    <React.Fragment>
                      <Typography color="textPrimary">{option}</Typography>
                    </React.Fragment>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Cidade"
                      color="primary"
                      variant="outlined"
                    />
                  )}
                /> */}
              </form>
            </HalfInputsContainer>
          </InputsContainer>
        </Grid>
      </Grid>

      <OpeningHoursModal
        openModal={openModal}
        setOpenModal={setModal}
      />
    </>
  );
};

const SelectStyled = styled(Select)`
  background-color: ${(props) => props.theme.palette.grey[100]};
`;

const TextFieldStyled = styled(TextField)`
  background-color: ${(props) => props.theme.palette.grey[100]};
`;

const GridButtons = styled(Grid)`
  justify-content: flex-end;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        margin-top: 1rem;
        justify-content: flex-start;
      }
    `}
`;

const GridTitle = styled(Grid)`
  align-self: center;
`;

const ActionButtons = styled.div`
  gap: .5rem;
  display: grid;
  justify-content: end;
  grid-template-columns: min-content min-content;
`;

const HalfInputsContainer = styled.div`
  gap: .5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const InputsContainer = styled.div`
  gap: .8rem;
  display: grid;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.palette.common.white};
`;
