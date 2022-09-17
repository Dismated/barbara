import SearchBox from "./SearchBox";
import { AppBar, Toolbar } from "@mui/material";
import { ReactComponent as Logo } from "../assets/barbara.svg";

const Heading = () => {
  return (
    <AppBar
      sx={{
        position: "fixed",
        left: "50%",
        transform: "translate(-50%, 0)",
        top: 0,
        color: "primary",
        height: "64px",
      }}
    >
      <Toolbar>
        <Logo style={{ width: 56, height: 56 }} />
        <SearchBox />
      </Toolbar>
    </AppBar>
  );
};

export default Heading;
