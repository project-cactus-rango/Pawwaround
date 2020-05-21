import React from "react";
import clsx from "clsx";
import DogFriends from "../../images/DogFriends.svg";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.light,
    paddingTop: 200,
    paddingBottom: 200,
    [theme.breakpoints.down("md")]: {
      paddingTop: 60,
      paddingBottom: 60,
    },
  },
  image: {
    // perspectiveOrigin: "left center",
    // transformStyle: "preserve-3d",
    // perspective: 1500,
    "& > img": {
      maxWidth: "90%",
      height: "auto",
      //   transform: "rotateY(-35deg) rotateX(15deg)",
      //   backfaceVisibility: "hidden",
      //   boxShadow: theme.shadows[16],
    },
  },
  shape: {
    position: "absolute",
    top: 0,
    left: 0,
    "& > img": {
      maxWidth: "90%",
      height: "auto",
    },
  },
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography variant="overline" color="secondary">
                Welcome
              </Typography>
              <Typography variant="h1" color="textPrimary">
                PawwAround
              </Typography>
              <Box mt={3}>
                <Typography variant="body1" color="textSecondary">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </Typography>
              </Box>
              <Box mt={3}>
                {/* <Grid container spacing={3}>
                  <Grid item>
                    <Typography variant="h1" color="secondary">
                      30+
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      Demo Pages
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h1" color="secondary">
                      UX
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      Complete Flows
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h1" color="secondary">
                      300+
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      Components
                    </Typography>
                  </Grid>
                </Grid> */}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box position="relative">
              <div className={classes.shape}>
                {/* <img
                  alt="DogFriends"
                  src={DogFriends}
                  className={classes.shape}
                /> */}
              </div>
              <div className={classes.image}>
                <img alt="DogFriends" src={DogFriends} />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;
