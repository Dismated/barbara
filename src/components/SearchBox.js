import DropdownBox from "./DropdownBox";
import {
  ClickAwayListener,
  IconButton,
  InputBase,
  Typography,
  Box,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { setPrompt } from "../reducers/promptReducer";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { setUrl } from "../reducers/urlReducer";
import { setSuggestion } from "../reducers/suggestionReducer";
import debounce from "../hooks/debounce";

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
  const url = `${process.env.REACT_APP_PRODUCTS_7_API_URL}${prompt}`;

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
