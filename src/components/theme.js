import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#90A955',
      darker: '#053e85',
      contrastText: '#202020',
    },
    neutral: {
      main: '#6D695B',
      contrastText: '#fff',
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
