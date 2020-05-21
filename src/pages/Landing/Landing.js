import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import Topbar from "../../Components/landing/TopBar";
import Hero from "../../Components/landing/Hero";
import HowTo from "../../Components/landing/HowTo";

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Topbar />
      <Hero />
      <Divider />
      <HowTo />
    </div>
  );
}
