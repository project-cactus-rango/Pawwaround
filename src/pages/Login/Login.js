import React from "react";
import LoginCard from "../../Components/auth/login/loginCard";
import { makeStyles } from "@material-ui/core";
import NavBar from "../../Components/auth/navbar";
import DogSpace from "../../images/DogSpace.svg";
import Hidden from "@material-ui/core/Hidden";
import FadeIn from "react-fade-in";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
  },
  dogSpace: {
    // width: "100%",
    maxHeight: 800,
    position: "absolute",
    bottom: 0,
    // right: 0,
    zIndex: 0,
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <LoginCard />
      <Hidden smDown>
        <img alt="Dogspace" src={DogSpace} className={classes.dogSpace} />
      </Hidden>
    </div>
  );
}
