import {
  AppBar,
  Box,
  IconButton,
  Popover,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import { ReactComponent as Logo } from "assets/barbara.svg";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SearchBox from "./SearchBox";
import UserWindow from "./UserWindow";
import { styled } from "@mui/material/styles";

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const LogoStyled = styled(Logo)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: 48,
    height: 48,
    marginLeft: "5px",
    marginTop: "5px",
  },
  [theme.breakpoints.up("sm")]: {
    width: 56,
    height: 56,
  },
}));

const Heading = (props) => {
  return (
    <HideOnScroll {...props}>
      <AppBar sx={appBarStyles}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <LogoStyled />
          <SearchBox />
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <>
                <IconButton
                  sx={{ color: "inherit" }}
                  {...bindTrigger(popupState)}
                >
                  <MoreVertOutlinedIcon
                    sx={{
                      fontSize: "28px",
                      mt: "2px",
                      display: { xs: "inline-flex", md: "none" },
                    }}
                  />
                </IconButton>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  PaperProps={{
                    style: { width: "100%" },
                  }}
                >
                  <UserWindow />
                </Popover>
              </>
            )}
          </PopupState>
        </Box>
      </AppBar>
    </HideOnScroll>
  );
};

export default Heading;

const appBarStyles = {
  position: "fixed",
  top: 0,
  color: "primary",
  height: ["56px", "64px"],
};
