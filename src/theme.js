import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Syne', 'Poppins', 'Inconsolata', 'sans-serif'].join(','),
    h1: { fontSize: '32px', fontWeight: 'bold' },
    h2: { fontSize: '24px', fontWeight: 'bold' },
    body1: { fontSize: '16px' },
    body2: { fontSize: '14px' },
  },
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#808080',
      contrastText: '#FFFFFF',
    },
    grey: {
      100: '#F5F5F5',
      200: '#E0E0E0',
      300: '#BDBDBD',
      400: '#9E9E9E',
      500: '#757575',
      600: '#616161',
      700: '#424242',
      800: '#212121',
      900: '#121212',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          padding: '10px 20px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: 'none',
        },
      },
    },
  },
});

export default theme;
