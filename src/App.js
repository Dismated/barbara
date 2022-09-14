import Heading from "./components/Heading";
import MainDisplay from "./components/MainDisplay";
import useFetch from "./hooks/useFetch";
import { setMainProduct } from "./reducers/mainProductReducer";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";
import { setSuggestion } from "./reducers/suggestionReducer";
import { useDispatch, useSelector } from "react-redux";
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
  const prompt = useSelector((state) => state.prompt);

  useFetch(
    "https://serene-eyrie-74646.herokuapp.com/https://barbora.lt/akcijos",
    setMainProduct
  );

  useFetch(
    `https://serene-eyrie-74646.herokuapp.com/https://barbora.lt/paieska?q=${prompt}`,
    setSuggestion,
    prompt
  );
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
