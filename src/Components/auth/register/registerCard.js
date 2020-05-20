import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router";
import RegisterForm from "./registerForm";
import FadeIn from "react-fade-in";

import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
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
    // backgroundColor: "#282A2D",
    borderRadius: 14,
  },
}));

function RegisterCard() {
  const classes = useStyles();
  const history = useHistory();
  const handleSubmitSuccess = () => {
    history.push("/dashboard");
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Card className={classes.card} elevation={3}>
          <CardContent>
            <FadeIn>
              <Typography
                gutterBottom
                variant="h2"
                color="textSecondary"
                align="center"
              >
                Sign up
              </Typography>
              <Box mt={1}>
                <RegisterForm onSubmitSuccess={handleSubmitSuccess} />
              </Box>
              <Box my={2}>
                <Divider />
              </Box>
              <Link
                component={RouterLink}
                to="/login"
                variant="body2"
                color="textSecondary"
              >
                Have an account?
              </Link>
            </FadeIn>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default RegisterCard;
