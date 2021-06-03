import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 740,
      lg: 980,
      xl: 1220,
      xxl: 1440,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          WebkitFontSmoothing: 'auto',
        },
        body: {
          height: 'inherit',
          background: '#f5f5f5',
          color: '#000',
        },
        '#__next': {
          height: '100%',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#008766',
      dark: '#e6f1ee',
    },
    secondary: {
      main: '#ff5c3e',
      dark: '#ffe6e2',
    },
    grays: {
      light: '#eee',
      border: '#ddd',
      default: '#ccc',
      medium: '#aaa',
      dark: '#444',
    },
  },
  speed: '.215s',
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    caption: {},
  },
});

export default theme;
