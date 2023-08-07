import { materialLightTheme } from './materialLightTheme';

export type MaterialColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

const theme = {
  light: materialLightTheme,
};
export default theme
