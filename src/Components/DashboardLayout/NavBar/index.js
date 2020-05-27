/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Pawwaround from "../../../images/Pawwaround.png";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../../redux/reducer";
import axios from "axios";
import {
  Avatar,
  Box,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Plus, Calendar, LogOut, User } from "react-feather";
import NavItem from "./NavItem";

const navConfig = [
  {
    // subheader: "Reports",
    items: [
      {
        title: "Events",
        icon: Calendar,
        href: "/events",
      },
      {
        title: "Create Event",
        icon: Plus,
        href: "/addevent",
      },
      {
        title: "Account",
        icon: User,
        href: "/account",
      },
    ],
  },
];

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
  const key = item.title + depth;
  acc.push(
    <NavItem
      depth={depth}
      href={item.href}
      icon={item.icon}
      key={key}
      info={item.info}
      title={item.title}
    />
  );

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 88,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
  logo: {
    height: 40,
  },
}));

function NavBar({ openMobile, onMobileClose }) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log(user);

  const handleLogout = () => {
    axios
      .get("/user/logout")
      .then(() => {
        dispatch(clearUser());
        history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Hidden lgUp>
        <Box p={2} display="flex" justifyContent="center">
          <RouterLink to="/">
            <img alt="Logo" src={Pawwaround} className={classes.logo} />
          </RouterLink>
        </Box>
      </Hidden>
      <Box p={2}>
        <Box display="flex" justifyContent="center">
          <RouterLink to="/account">
            <Avatar alt="User" className={classes.avatar} src="{user.avatar}" />
          </RouterLink>
        </Box>
        <Box mt={2} textAlign="center">
          <Link
            component={RouterLink}
            to="/account"
            variant="h5"
            color="textPrimary"
            underline="none"
          >
            {`Welcome, ${user.first_name}`}
          </Link>
        </Box>
      </Box>
      <Box p={2}>
        {navConfig.map(config => (
          <List
            key={config.subheader}
            subheader={
              <ListSubheader disableGutters disableSticky>
                {config.subheader}
              </ListSubheader>
            }
          >
            {renderNavItems({
              items: config.items,
              pathname: location.pathname,
            })}
          </List>
        ))}
      </Box>
      <Box p={4} position="absolute" bottom={0} left={0}>
        <Button
          color="primary"
          className={classes.button}
          startIcon={<LogOut />}
          onClick={handleLogout}
          // variant="outlined"
        >
          logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

export default NavBar;
