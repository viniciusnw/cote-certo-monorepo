import React from 'react';
import { createTheme } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteColor {
    lighter?: React.CSSProperties['color'];
  }
  interface SimplePaletteColorOptions {
    lighter?: React.CSSProperties['color'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
  interface Palette {
    neutral: Palette['primary'];
  }
}

const defaultTheme = createTheme();

const typographyOptions: TypographyOptions = {
  fontFamily: ['Montserrat', 'sans-serif'].join(','),
  allVariants: {
    color: '#FFF'
  },
  h1: {
    fontWeight: 700,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  h4: {
    fontWeight: 400,
  },
  h5: {
    fontSize: '1rem',
    fontWeight: 700,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 700,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  button: {
    fontSize: '1rem',
    fontWeight: 500,
    textTransform: 'none',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 300,
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    transform: 'none',
  },
};

const paletteOptions: PaletteOptions = {
  primary: {
    main: 'rgba(57, 208, 100)',
    lighter: 'rgba(57, 208, 100, 0.08)',
  },
  secondary: {
    main: 'rgba(0, 193, 146)',
    lighter: 'rgba(0, 193, 146)',
  },
  info: {
    main: '#2196F3',
    lighter: '#2196F30a',
  },
  success: {
    main: '#4CAF50',
    lighter: '#4CAF500a',
  },
  error: {
    main: '#F44336',
    lighter: '#F443360a',
  },
  warning: {
    main: '#FF9800',
    lighter: '#FF98000a',
  },
  text: {
    primary: '#1A1A1A'
  },
  divider: '#313131',
  neutral: {
    main: '#bb39d0',
  },
};

export const materialLightTheme = createTheme({
  typography: typographyOptions,
  palette: paletteOptions,
  overrides: {
    MuiTypography: {
      h2: {
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "1.5rem"
        },
        [defaultTheme.breakpoints.down("xs")]: {
          fontSize: "1rem"
        }
      },
      h3: {
        [defaultTheme.breakpoints.down("xs")]: {
          fontSize: "1rem"
        }
      },
      h6: {
        [defaultTheme.breakpoints.down("xs")]: {
          fontSize: ".875rem"
        }
      },
      body1: {
        [defaultTheme.breakpoints.down("xs")]: {
          fontSize: ".875rem"
        }
      },
      body2: {
        [defaultTheme.breakpoints.down("xs")]: {
          fontSize: ".775rem"
        }
      },
      subtitle2: {
        [defaultTheme.breakpoints.down("xs")]: {
          fontSize: ".675rem"
        }
      }
    },
    MuiButton: {
      colorInherit: {
        backgroundColor: defaultTheme.palette.grey[400],
        '&:hover': {
          backgroundColor: defaultTheme.palette.grey[500],
        },
      },
      outlined: {
        borderColor: '#FFF',
      },
      root: {
        borderColor: '#FFF',
        color: '#FFF'
      }
    },
    MuiTab: {
      root: {
        minWidth: 0,
        [defaultTheme.breakpoints.up('sm')]: {
          minWidth: 0,
        },
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: 700,
      },
    },
    MuiInputLabel:{
      root:{
        color: '#1A1A1A'
      }
    }
  },
});
