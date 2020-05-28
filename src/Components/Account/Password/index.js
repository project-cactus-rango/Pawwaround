import React from "react";
import { CardHeader, Divider, makeStyles } from "@material-ui/core";

import FadeIn from "react-fade-in";
import PasswordSettings from "./PasswordSettings";

const useStyles = makeStyles(() => ({
  root: {},
}));

function Password() {
  const classes = useStyles();
  return (
    <FadeIn>
      <div className={classes.root}>
        <CardHeader title="Update Password" />
        <Divider />
        <PasswordSettings />
      </div>
    </FadeIn>
  );
}

export default Password;
