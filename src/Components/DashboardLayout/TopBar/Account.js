import React, { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// import { useHistory } from "react-router";
// import { Settings } from "react-feather";
// import axios from "axios";

import {
  ButtonBase,
  Typography,
  Hidden,
  Menu,
  MenuItem,
  Box,
  Avatar,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  popover: {
    width: 200,
  },
}));

export default function Account() {
  const classes = useStyles();
  //   const history = useHistory();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    // try {
    //   handleClose();
    //   await axios.get("/api/auth/logout");
    //   await clearUser();
    //   history.push("/");
    //   window.location.reload();
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Avatar alt="User" className={classes.avatar} src="{user.avatar}" />
        <Hidden smDown>
          <Typography variant="h6" color="inherit">
            {`${"user.firstName"} ${"user.lastName"}`}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem component={RouterLink} to="/account">
          Account
        </MenuItem>
        <MenuItem onClick={handleLogout} >Logout</MenuItem>
      </Menu>
    </>
  );
}
