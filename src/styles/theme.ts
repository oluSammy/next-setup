import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      dark: '#09090A',
      main: '#621df5',
      contrastText: '#eae9ed',
      light: '#a2a3b0',
      // darkGrey: "#282836",
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
});

export default theme;
