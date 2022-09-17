import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: red[600],
    },
    background: {
      default: grey[100],
    },
  },
  typography: {
    fontSize: 12,
  },
});

export default lightTheme;
