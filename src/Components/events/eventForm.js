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
    
      onSubmit={(data)=> {
        // const { eventName, eventDate, eventTime, eventLocation, eventDetails, eventImg} = values;
        //add axios call here
      }}
     >

    {({values,handleChange,handleBlur,handleSubmit}) => (
       <form onSubmit={handleSubmit}>
          <TextField
            name="Event Name"
            value={values.eventName}
            onChangeText={handleChange}
            onBlur={handleBlur}
          />
            <TextField
            name="Event Date"
            value={values.eventDate}
            onChangeText={handleChange}
            onBlur={handleBlur}
          />
          <TextField
          name="Event Time"
          value={values.eventTime}
          onChangeText={handleChange}
          onBlur={handleBlur}
        />
        <TextField
        name="Event Location"
        value={values.eventLocation}
        onChangeText={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        name="Event Details"
        value={values.eventDetails}
        onChangeText={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        name="Event Image"
        value={values.eventImg}
        onChangeText={handleChange}
        onBlur={handleBlur}
      />
    <div><Button title ='submit' color ='secondary' onPress={handleSubmit} > Submit </Button></div>
    </form>
        )}

      </Formik>
    );
    }

export default eventForm;