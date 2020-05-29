import React from "react";
// import Logo from "src/components/Logo";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../images/dogLogo.svg";
import Pawwaround from "../../images/Pawwaround.png";

import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Hidden,
  Link,
  makeStyles,
  useScrollTrigger,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    height: 88,
  },
  logo: {
    marginRight: theme.spacing(2),
    height: 40,
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

export default function TopBar(props) {
  const classes = useStyles();
  return (
    <ElevationScroll {...props}>
      <AppBar className={classes.root} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <RouterLink to="/">
            <img alt="Logo" src={Logo} className={classes.logo} />
            <Hidden smDown>
              <img alt="Logo" src={Pawwaround} className={classes.logo} />
            </Hidden>
          </RouterLink>
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
            Login
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
    </ElevationScroll>
  );
}
