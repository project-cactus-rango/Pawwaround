import React from "react";
import RegisterCard from "../../Components/auth/register/registerCard";
import NavBar from "../../Components/auth/navbar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
  },
}));

export default function Register() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <RegisterCard />
    </div>
  );
}
