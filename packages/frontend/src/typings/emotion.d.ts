/// <reference types="@emotion/react/types/css-prop" />

import '@emotion/react'
import { Theme as MaterialTheme } from '@material-ui/core';

declare module '@emotion/react' {
  export interface Theme extends MaterialTheme {}
}
