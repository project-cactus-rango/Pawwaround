import React from "react";
import Header from "./Header";

import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import UsefulLinks from "./UsefullLinks";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
}));

export default function CreateEvents() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Header />
        <Typography></Typography>

        <Grid className={classes.root} container spacing={3}>
          <Grid item lg={12} md={10} xl={9} xs={12}>
            <UsefulLinks />
          </Grid>
          <Grid item lg={10} md={10} xl={9} xs={12}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
