import DropdownBox from "./DropdownBox";
import {
  ClickAwayListener,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { setPrompt } from "../reducers/promptReducer";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { setUrl } from "../reducers/urlReducer";
import { setSuggestion } from "../reducers/suggestionReducer";

const Search = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "800px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "93%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const SearchBox = () => {
  const [open, setOpen] = useState(false);

  const prompt = useSelector((state) => state.prompt);

  const dispatch = useDispatch();

  const url = prompt
    ? `https://serene-eyrie-74646.herokuapp.com/https://barbora.lt/paieska?q=${prompt}`
    : null;
  const { data, isLoading, error } = useFetch(url);

  useEffect(() => {
    dispatch(setSuggestion(data));
  });

  const handleSearchChange = (event) => {
    dispatch(setPrompt(event.target.value));
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div
        style={{
          position: "absolute",
          top: 11,
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <Search
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(
              setUrl(
                `https://serene-eyrie-74646.herokuapp.com/https://barbora.lt/paieska?q=${prompt}`
              )
            );
          }}
        >
          <StyledInputBase
            placeholder="Search…"
            onClick={() => setOpen(true)}
            onChange={handleSearchChange}
            autoFocus={true}
          ></StyledInputBase>
          <IconButton type="submit" style={{ color: "inherit" }}>
            <SearchIcon />
          </IconButton>
        </Search>
        {error && <Typography>Something went wrong</Typography>}
        {open && <DropdownBox />}
      </div>
    </ClickAwayListener>
  );
};
export default SearchBox;
