import React from "react";
import Header from "./Header";
import EventForm from "./EventForm";

import { Container, Grid, makeStyles } from "@material-ui/core";
import FadeIn from "react-fade-in";

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
        <Grid className={classes.root} container spacing={3}>
          <Grid item lg={10} md={10} xl={9} xs={12}>
            <FadeIn>
              <EventForm />
            </FadeIn>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
