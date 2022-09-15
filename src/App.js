import Heading from "./components/Heading";
import MainDisplay from "./components/MainDisplay";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { initializeProduct } from "./reducers/productReducer";

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
  const dispatch = useDispatch();

  dispatch(initializeProduct());

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
