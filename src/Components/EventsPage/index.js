import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";

import { Container, Grid, makeStyles } from "@material-ui/core";
import EventCard from "./EventCard";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
}));

export default function EventsPage() {
  const [events, setevents] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    getUserEvents();
  }, []);

  const getUserEvents = () => {
    axios
      .get("/api/event")
      .then(res => setevents(res.data))
      .catch(err => console.log(err));
  };

  const mappedPosts = events.map((event, i) => (
    <EventCard
      key={i}
      date={event.date}
      description={event.description}
      img={event.img}
      location={event.location}
      title={event.title}
      time={event.start_time}
    />
  ));
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Header />
        <Grid className={classes.root} container spacing={5}>
          {mappedPosts}
        </Grid>
      </Container>
    </div>
  );
}
