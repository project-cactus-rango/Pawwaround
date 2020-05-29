import React from "react";
import { useHistory } from "react-router";

import * as Yup from "yup";
import { Formik } from "formik";
import Map from "../mapbox/mapbox";
import axios from "axios";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

// <==========AutoComplete imports and functions ===========>
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

// <===================>

const useStyles = makeStyles(theme => ({
  root: {},
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

function EventForm({ className, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  // const { enqueueSnackbar } = useSnackbar();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  // <====================Helper Funtions for AutoFill===========>
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBhu3Hds8T2OPYUO-SB2fUOSvW-4Ygh90A&libraries=places",
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, results => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  // <===========================================>

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: "",
        description: "",
        location: "",
        date: null,
        time: null,
        img: "",
      }}
      validationSchema={Yup.object().shape({
        description: Yup.string().max(5000),
        name: Yup.string().max(255).required(),
      })}
      onSubmit={(
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        const { description, date, location, name, time, img } = values;

        axios
          .post("/api/event", { description, location, date, time, name, img })
          .then(res => {
            resetForm();
            setStatus({ success: true });
            history.push("/events");
            //     enqueueSnackbar("Profile updated", {
            // //     variant: "success",
            // //   });
          })
          .catch(error => {
            setStatus({ success: false });
            setErrors({ submit: error.message });
            setSubmitting(false);
          });
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit} className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Card>
                <CardContent>
                  <Box mt={2}>
                    <TextField
                      error={Boolean(touched.name && errors.name)}
                      fullWidth
                      helperText={touched.name && errors.name}
                      label="Name"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      variant="outlined"
                    />
                  </Box>
                  <Box mt={2}>
                    <TextField
                      id="description"
                      error={Boolean(touched.description && errors.description)}
                      fullWidth
                      helperText={touched.description && errors.description}
                      multiline
                      rows={5}
                      label="Event Description"
                      name="description"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.description}
                      variant="outlined"
                    />
                  </Box>
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      label="Image Url"
                      name="img"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.img}
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
              </Card>
              <Box mt={3}>
                <Card>
                  <CardHeader title="Time & Date" />
                  <Divider />
                  <CardContent>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-evenly">
                        <KeyboardDatePicker
                          disableToolbar
                          disablePast
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          name="date"
                          value={values.date}
                          id="date-picker-inline"
                          label="Pick a Date"
                          onChange={(event, newValue) => {
                            handleDateChange();
                            setFieldValue("date", newValue);
                          }}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-picker"
                          label="Select a time"
                          name="time"
                          minutesStep={5}
                          value={selectedDate}
                          color="secondary"
                          onChange={(event, newValue) => {
                            setFieldValue("time", newValue);
                          }}
                          KeyboardButtonProps={{
                            "aria-label": "change time",
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>
                  </CardContent>
                </Card>
              </Box>
              <Box mt={3}>
                <Card>
                  <CardHeader title="Location" />
                  <Divider />
                  <CardContent>
                    <Autocomplete
                      fullWidth
                      name="location"
                      getOptionLabel={option =>
                        typeof option === "string" ? option : option.description
                      }
                      filterOptions={x => x}
                      options={options}
                      autoComplete
                      includeInputInList
                      filterSelectedOptions
                      onChange={(event, newValue) => {
                        setOptions(newValue ? [newValue, ...options] : options);
                        // setValue(newValue.description);
                        setFieldValue("location", newValue.description);
                      }}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Add a location"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                      renderOption={option => {
                        const matches =
                          option.structured_formatting
                            .main_text_matched_substrings;
                        const parts = parse(
                          option.structured_formatting.main_text,
                          matches.map(match => [
                            match.offset,
                            match.offset + match.length,
                          ])
                        );

                        return (
                          <Grid container alignItems="center">
                            <Grid item>
                              <LocationOnIcon className={classes.icon} />
                            </Grid>
                            <Grid item xs>
                              {parts.map((part, index) => (
                                <span
                                  key={index}
                                  style={{
                                    fontWeight: part.highlight ? 700 : 400,
                                  }}
                                >
                                  {part.text}
                                </span>
                              ))}

                              <Typography variant="body2" color="textSecondary">
                                {option.structured_formatting.secondary_text}
                              </Typography>
                            </Grid>
                          </Grid>
                        );
                      }}
                    />
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card>
                <CardHeader title="Map" />
                <Divider />
                <CardContent>
                  <Box>
                    <Map />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}
          <Box mt={2}>
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              Create product
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

export default EventForm;
