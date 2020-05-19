import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../../images/dogLogo.svg";

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
    height: 62,
    width: 62,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <img alt="Logo" src={Logo} className={classes.avatar} />
        </RouterLink>

        <Box ml={2} flexGrow={1} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
