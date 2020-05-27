import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/reducer";

import {
  Box,
  Avatar,
  Typography,
  CardActions,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

function GeneralSettings() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { email, first_name, last_name } = user;
  return (
    <Formik
      enableReinitialize
      initialValues={{
        email: email,
        firstName: first_name,
        lastName: last_name,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        firstName: Yup.string().max(255).required("First name is required"),
        lastName: Yup.string().max(255).required("Last name is required"),
      })}
      onSubmit={(
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        const { email, firstName, lastName } = values;

        axios
          .put(`/api/update/${user.user_id}`, {
            email,
            firstName,
            lastName,
          })
          .then(res => {
            dispatch(updateUser(res.data[0]));
            resetForm();
            setStatus({ success: true });
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
      }) => (
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="First Name"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  type="firstName"
                  value={values.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Last Name"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  type="lastName"
                  value={values.lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
          </CardContent>

          <Box p={2} display="flex" justifyContent="flex-end">
            <Button
              color="secondary"
              disabled={isSubmitting}
              type="submit"
              variant="contained"
            >
              Save Changes
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

export default GeneralSettings;
