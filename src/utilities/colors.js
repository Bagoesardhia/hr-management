import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const ColorPick = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default function colorsPick(){
  <ColorPick/>
}