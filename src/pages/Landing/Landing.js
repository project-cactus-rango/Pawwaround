import React from "react";
import { makeStyles } from "@material-ui/core";
import Topbar from "../../Components/landing/TopBar";

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Landing() {
  return (
    <div>
      <Topbar />
      <h1>Login page</h1>
    </div>
  );
}
