import SearchBox from "./SearchBox";
import { AppBar, Toolbar } from "@mui/material";
import { ReactComponent as Logo } from "../assets/barbara.svg";

const Heading = () => {
  return (
    <AppBar
      color="primary"
      style={{
        position: "fixed",
        left: "50%",
        transform: "translate(-50%, 0)",
        top: 0,
      }}
    >
      <Toolbar>
        <Logo style={{ width: 55, height: 55 }} />
        <SearchBox />
      </Toolbar>
    </AppBar>
  );
};

export default Heading;
