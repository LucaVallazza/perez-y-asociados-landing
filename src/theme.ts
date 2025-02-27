import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Azul oscuro
    },
    secondary: {
      main: '#c5a572', // Dorado
    },
  },
  typography: {
    fontFamily: '"Libre Baskerville", "Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '2rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          padding: '0.75rem 2rem',
        },
      },
    },
  },
});