import React from "react";
import RegisterCard from "../../Components/auth/register/registerCard";
import NavBar from "../../Components/auth/navbar";
import { makeStyles } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import DogWalk from "../../images/dog_walking.svg";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
  },
  dogWalk: {
    height: 440,
    position: "absolute",
    bottom: 0,
    right: 8,
    zIndex: 0,
  },
}));

export default function Register() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <RegisterCard />

      <Hidden only="xs">
        <img alt="dogWalk" src={DogWalk} className={classes.dogWalk} />
      </Hidden>
    </div>
  );
}
