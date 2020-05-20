import React from "react";
import { Formik } from "formik";
import { Box, Button, TextField, FormHelperText } from "@material-ui/core";

function eventForm({ onSubmitSuccess }) {
    return (
     <Formik
        initialValues={{
        eventName: "",
        eventDate: "",
        eventTime: "",
        eventLocation: "",
        eventDetails: "",
        eventImg:'',
      }}
    
      onSubmit={(values)=> {
        // const { eventName, eventDate, eventTime, eventLocation, eventDetails, eventImg} = values;
        //add axios call here
      }}
     >

    {({props}) => (
       <form>
          <TextField
            placeholder="Event Name"
            onChangeText={props.handleChange('eventName')}
            value={props.values.eventName}
          />

          <TextField
            placeholder="Event Date"
            onChangeText={props.handleChange('eventDate')}
            value={props.values.eventDate}
          />

          <TextField
            placeholder="Event Time"
            onChangeText={props.handleChange('eventTime')}
            value={props.values.eventTime}
          />

          <TextField
            placeholder="Event Location"
            onChangeText={props.handleChange('eventLocation')}
            value={props.values.eventLocation}
          />
          <TextField
            placeholder="Event Details"
            onChangeText={props.handleChange('eventDetails')}
            value={props.values.eventDetails}
          />
          <TextField
            placeholder="Event Image"
            onChangeText={props.handleChange('eventImg')}
            value={props.values.eventImg}
          />

          <Button title ='submit' color ='secondary' onPress={props.handleSubmit} > Submit </Button>
          </form>
        )}

      </Formik>
    );
    }

export default eventForm;