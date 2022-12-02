import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#90A955',
      contrastText: '#202020',
    },
    neutral: {
      main: '#6D695B',
      contrastText: '#fff',
    },
  },
});

console.log(theme.palette.mode);

theme = responsiveFontSizes(theme);
export default theme;
