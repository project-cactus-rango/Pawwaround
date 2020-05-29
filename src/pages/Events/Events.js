import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";
import NavBar from "../../Components/DashboardLayout/NavBar";
import TopBar from "../../Components/DashboardLayout/TopBar";
import EventsPage from "../../Components/EventsPage";
// import EventCard from "../../Components/EventsPage/eventCard";
// import ReportCard from "../../Components/links/reportCard";
// import Mapbox from "../../Components/mapbox/mapbox";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 88,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

function Events() {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <EventsPage />
            {/* <h1>Upcoming Events</h1>
            <Button variant="outlined" color="primary">
              Create Event
            </Button> */}
            {/* <EventCard /> */}
            {/* <Mapbox /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;
