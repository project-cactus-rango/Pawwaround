import React from "react";
import { makeStyles } from "@material-ui/core";
import Topbar from "../../Components/landing/TopBar";
import Hero from "../../Components/landing/Hero";

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Landing() {
  return (
    <div>
      <Topbar />
      <Hero />
      <h1>Login page</h1>
    </div>
  );
}
