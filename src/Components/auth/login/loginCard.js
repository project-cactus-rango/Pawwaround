import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router";
import LoginForm from "./loginForm";
// <===============Material-ui============================>
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import FadeIn from "react-fade-in";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    // backgroundColor: "#1C1F22",
    display: "flex",
    height: "100%",
    minHeight: "100%",
    flexDirection: "column",
    paddingBottom: 80,
    paddingTop: 80,
    position: "relative",
    zIndex: 1,
  },
  card: {
    overflow: "visible",
    display: "flex",
    position: "relative",
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
      width: "50%",
      borderRadius: 14,
    },
  },
  content: {
    padding: theme.spacing(4, 4, 3, 4),
  },
  media: {
    // borderTopRightRadius: 4,
    // borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
// <======================================================>

export default function LoginCard() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmitSuccess = () => {
    history.push("/dashboard");
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box className={classes.card}>
          <Paper elevation={3}>
            <CardContent className={classes.content}>
              <FadeIn>
                <Typography color="textSecondary" variant="h2">
                  Login with the following
                </Typography>
                <Box mt={3}>
                  <LoginForm onSubmitSuccess={handleSubmitSuccess} />
                </Box>
                <Box my={2}>
                  <Divider />
                </Box>
                <Link
                  component={RouterLink}
                  to="/signup"
                  variant="body2"
                  color="textPrimary"
                >
                  Create new account
                </Link>
              </FadeIn>
            </CardContent>
          </Paper>
          <Box className={classes.media}>
            <FadeIn>
              <Typography variant="overline" color="secondary">
                HELPFUL FACT #4
              </Typography>
              <Typography variant="h2" color="textPrimary">
                The tallest dog in the world is 44 inches tall
              </Typography>
              <Box mt={3}>
                <Typography variant="body2" color="textSecondary">
                  The tallest dog in the world ever was a Great Dane named Zeus!
                  Measured at 44 inches tall on October 4th 2011, he’s the
                  current Guinness World Record holder.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
