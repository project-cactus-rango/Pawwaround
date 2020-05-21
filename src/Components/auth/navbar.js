import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../../images/dogLogo.svg";
import Pawwaround from "../../images/Pawwaround.png";

import { AppBar, Box, Toolbar, makeStyles, Hidden } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 80,
  },
  logo: {
    marginRight: theme.spacing(2),
    height: 44,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.root} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <img alt="Logo" src={Logo} className={classes.logo} />
          <Hidden smDown>
            <img alt="Logo" src={Pawwaround} className={classes.logo} />
          </Hidden>
        </RouterLink>

        <Box ml={2} flexGrow={1} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
