import React from "react";
import { Link as RouterLink } from "react-router-dom";

// import Logo from "../../assets/cat3.svg";

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 80,
  },
  avatar: {
    height: 44,
    width: 44,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <IconButton size="small">
          <RouterLink to="/">
            {/* <img alt="Logo" src={Logo} className={classes.avatar} /> */}
          </RouterLink>
        </IconButton>
        <Box ml={2} flexGrow={1} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
