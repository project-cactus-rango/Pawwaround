import React from "react";
// import Logo from "src/components/Logo";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../images/dogLogo.svg";

import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Hidden,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    height: 80,
  },
  logo: {
    marginRight: theme.spacing(2),
    height: 62,
    width: 62,
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    "& + &": {
      marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

export default function TopBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <img alt="Logo" src={Logo} className={classes.logo} />
        </RouterLink>
        <Hidden mdDown>
          <Typography variant="caption" color="textSecondary">
            Pawwaround
          </Typography>
        </Hidden>
        <Box flexGrow={1} />
        {/* <Button
          color="secondary"
          component="a"
          href=""
          variant="contained"
          size="small"
        >
          Get the kit
        </Button> */}
        <Divider className={classes.divider} />
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/login"
          underline="none"
          variant="body1"
        >
          Login in
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/signup"
          underline="none"
          variant="body1"
        >
          Sign up
        </Link>
      </Toolbar>
    </AppBar>
  );
}
