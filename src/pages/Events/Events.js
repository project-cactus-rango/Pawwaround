import React from "react";
import EventCard from "../../Components/events/eventCard";
// import EventForm from "../../Components/events/eventForm";
import {Button} from "@material-ui/core"

export default function Events() {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <Button variant="outlined" color="primary">Create Event</Button>
      <EventCard/>
      
      
    </div>
  );
}
