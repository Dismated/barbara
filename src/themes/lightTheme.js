import { grey, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

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
