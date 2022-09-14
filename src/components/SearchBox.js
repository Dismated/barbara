import DropdownBox from "./DropdownBox";
import { ClickAwayListener, IconButton, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { setPrompt } from "../reducers/promptReducer";
import { useDispatch, useSelector } from "react-redux";
import { setMainProduct } from "../reducers/mainProductReducer";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

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
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const prompt = useSelector((state) => state.prompt);

  const handleSearchChange = (event) => {
    dispatch(setPrompt(event.target.value));
  };

  useFetch(
    `https://serene-eyrie-74646.herokuapp.com/https://barbora.lt/paieska?q=${prompt}`,
    setMainProduct,
    clicked,
    setClicked
  );

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
            setClicked(true);
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
        {open ? <DropdownBox /> : null}
      </div>
    </ClickAwayListener>
  );
};
export default SearchBox;
