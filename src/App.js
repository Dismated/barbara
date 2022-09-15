import Heading from "./components/Heading";
import MainDisplay from "./components/MainDisplay";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[600],
    },
    background: {
      default: grey[100],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default" }}>
        <Heading />
        <MainDisplay />
      </Box>
    </ThemeProvider>
  );
}
export default App;
