import Heading from "./components/Heading";
import MainDisplay from "./components/MainDisplay";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./themes/lightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default" }}>
        <Heading />
        <MainDisplay />
      </Box>
    </ThemeProvider>
  );
}
export default App;
