import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu as MenuIcon } from "react-feather";
import Pawwaround from "../../../images/Pawwaround.png";
import Notifications from "./Notifications";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon,
  useScrollTrigger,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 88,
  },
  logo: {
    marginRight: theme.spacing(2),
    height: 40,
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function TopBar({ onMobileNavOpen }, props) {
  const classes = useStyles();
  return (
    <ElevationScroll {...props}>
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Hidden lgUp>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={onMobileNavOpen}
            >
              <SvgIcon>
                <MenuIcon />
              </SvgIcon>
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            <RouterLink to="/events">
              <img alt="Logo" src={Pawwaround} className={classes.logo} />
            </RouterLink>
          </Hidden>
          <Box ml={2} flexGrow={1} />
          <Notifications />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
