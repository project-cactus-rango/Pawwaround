import React from "react";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.primary,
    paddingTop: 80,
    paddingBottom: 80,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 52,
    width: 52,
  },
  text: {
    color: theme.palette.text.primary,
  },
}));

/* <SvgIcon fontSize="default">
              <Settings />
            </SvgIcon> */

export default function HowTo({ className, ...rest }) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Typography variant="h1" align="center" className={classes.text}>
          How Pawwaround Works
        </Typography>
        <Box mt={8}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Avatar className={classes.avatar}>01</Avatar>
                <Box ml={2}>
                  <Typography
                    variant="h1"
                    gutterBottom
                    className={classes.text}
                  >
                    Discover Events
                  </Typography>
                  <Typography variant="body1" className={classes.text}>
                    Whether you're new to town or a local looking to meet new
                    dog parents, you can search through upcoming events located
                    near you.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Avatar className={classes.avatar}>02</Avatar>
                <Box ml={2}>
                  <Typography
                    variant="h1"
                    gutterBottom
                    className={classes.text}
                  >
                    Start an Event
                  </Typography>
                  <Typography variant="body1" className={classes.text}>
                    Can't find an event near you? Take initiative and create
                    your own local event for others to join.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
