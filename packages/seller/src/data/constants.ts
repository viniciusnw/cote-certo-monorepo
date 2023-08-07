import { SnackbarOrigin } from '@material-ui/core';

export const COOKIE_NAME = '@cotecerto/seller';

export const DEFAULT_SNACKBAR_POSITION: SnackbarOrigin = {
  vertical: 'bottom',
  horizontal: 'left',
};

export enum ClienteSexoEnum {
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO',
}

export const CLIENTE_SEXO = {
  [ClienteSexoEnum.MASCULINO]: 'Masculino',
  [ClienteSexoEnum.FEMININO]: 'Feminino',
};
