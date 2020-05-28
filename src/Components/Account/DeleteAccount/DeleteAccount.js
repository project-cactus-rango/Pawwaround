import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
// import { useHistory } from "react-router";
// import axios from "axios";
import FadeIn from "react-fade-in";

import {
  Box,
  Button,
  CardContent,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

function DeleteAccount() {
  const classes = useStyles();
  // const history = useHistory();
  // console.log(user.user_id);
  return (
    <Formik
      initialValues={{
        deleteConfirm: "",
      }}
      validationSchema={Yup.object().shape({
        deleteConfirm: Yup.string()
          .matches(
            "DELETE",
            "Sorry, please enter the text exactly as displayed to confirm"
          )
          .required("Required"),
      })}
      onSubmit={() => {
        // axios
        //   .delete(`/api/delete/${user.user_id}`)
        //   .then(() => {
        //     // console.log("User Deleted");
        //     clearUser();
        //     history.push("/");
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
        //   //   enqueueSnackbar("Password updated", {
        //   //     variant: "success",
        //   //   });
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
      }) => (
        <FadeIn>
          <form onSubmit={handleSubmit}>
            <CardContent className={classes.root}>
              <Grid container spacing={3}>
                <Grid item md={4} sm={6} xs={12}>
                  <TextField
                    error={Boolean(
                      touched.deleteConfirm && errors.deleteConfirm
                    )}
                    fullWidth
                    helperText={touched.deleteConfirm && errors.deleteConfirm}
                    label='Type " DELETE " to confirm'
                    name="deleteConfirm"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="delete"
                    variant="outlined"
                    autoComplete="off"
                    color="secondary"
                  />
                </Grid>
              </Grid>
              {errors.submit && (
                <Box mt={3}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
            </CardContent>
            <Divider />
            <Box p={2} display="flex" justifyContent="flex-end">
              <Button disabled={isSubmitting} type="submit">
                Delete my account
              </Button>
            </Box>
          </form>
        </FadeIn>
      )}
    </Formik>
  );
}
export default DeleteAccount;
