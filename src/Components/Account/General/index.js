import React from "react";
import { CardHeader, Divider, makeStyles } from "@material-ui/core";
import GeneralSettings from "./GeneralSettings";

import FadeIn from "react-fade-in";

const useStyles = makeStyles(() => ({
  root: {},
}));

function General() {
  const classes = useStyles();
  return (
    <FadeIn>
      <CardHeader title="General" />
      <Divider />
      <GeneralSettings />
    </FadeIn>
  );
}

export default General;
