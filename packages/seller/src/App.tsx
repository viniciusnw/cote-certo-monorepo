import React from 'react';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import { CssBaseline, StylesProvider } from '@material-ui/core';
import { DataProvider } from './data';
import { AppRouter } from './router/AppRouter';
import { theme } from './theme/theme';

export function App() {
  return (
    <DataProvider>
      <MaterialThemeProvider theme={theme.light}>
        <EmotionThemeProvider theme={theme.light}>
          <StylesProvider injectFirst={true}>
            <CssBaseline />
            <AppRouter />
          </StylesProvider>
        </EmotionThemeProvider>
      </MaterialThemeProvider>
    </DataProvider>
  );
}
