import {
  Box,
  ClickAwayListener,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DropdownBox from "./DropdownBox";
import SearchIcon from "@mui/icons-material/Search";
import { setPrompt } from "reducers/promptReducer";
import { setSuggestion } from "reducers/suggestionReducer";
import { setUrl } from "reducers/urlReducer";
import useDebounce from "hooks/useDebounce";
import useFetch from "hooks/useFetch";

const Search = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.up("xs")]: {
    width: "200px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "320px",
  },
  [theme.breakpoints.up("md")]: {
    width: "700px",
  },
}));

const SearchBox = () => {
  const [open, setOpen] = useState(false);

  const prompt = useSelector((state) => state.prompt);
  const dispatch = useDispatch();
  const debouncedSearchTerm = useDebounce(prompt, 500);

  const url = `https://serene-eyrie-74646.herokuapp.com/https://barbora.lt/api/eshop/v1/search?&limit=7&query=${debouncedSearchTerm}`;

  const { data, isLoading, error } = useFetch(url);

  useEffect(() => {
    dispatch(setSuggestion(data));
  }, [dispatch, data]);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(setUrl(`${process.env.REACT_APP_PRODUCTS_52_API_URL}${prompt}`));
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box sx={boxStyles}>
        <Search
          onSubmit={(event) => {
            debounce(() => {
              handleSearch(event);
            }, 1000);
          }}
        >
          <InputBase
            placeholder="Search…"
            onClick={() => setOpen(true)}
            onChange={(event) => dispatch(setPrompt(event.target.value))}
            autoFocus={true}
            sx={inputBaseStyles}
          ></InputBase>
          <IconButton type="submit" sx={{ color: "inherit" }}>
            <SearchIcon />
          </IconButton>
        </Search>
        {error && <Typography>Something went wrong</Typography>}
        {open && <DropdownBox loading={isLoading} />}
      </Box>
    </ClickAwayListener>
  );
};
export default SearchBox;

const inputBaseStyles = {
  color: "inherit",
  width: ["80%", "86%", "93%"],
  "& .MuiInputBase-input": {
    pl: 2,
  },
};
const boxStyles = {
  position: "absolute",
  top: [10, 12],
  left: "50%",
  transform: "translate(-50%, 0)",
};
