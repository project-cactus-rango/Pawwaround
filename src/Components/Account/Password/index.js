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
      <CardHeader title="Update Password" />
      <Divider />
      <PasswordSettings />
    </FadeIn>
  );
}

export default Password;
