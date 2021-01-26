import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    color: '#fff',
  },
  palette: {
    type: 'light',
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#42b72a',
    },
    background: {
      main: '#f7f7f7'
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    contrastText: '#fff',
  }
});
