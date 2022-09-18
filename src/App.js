import Heading from "./components/Heading";
import MainDisplay from "./components/MainDisplay";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./themes/lightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container disableGutters sx={{ bgcolor: "background.default" }}>
        <Heading />
        <MainDisplay />
      </Container>
    </ThemeProvider>
  );
}
export default App;
