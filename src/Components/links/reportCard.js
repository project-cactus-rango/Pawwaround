import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import {HashRouter as Router} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Router>
      <Card className={classes.root} variant="outlined">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.aaha.org/contentassets/6e767432008443fd978b9cc7ce666e6a/2017-12-27-istock-628950830-abuse-site-blog.jpg"
            title="PETA"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              Report Animal Cruelty
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              If you know of an animal in danger, please call your local police
              department or PETA at 757-622-7382{" "}
            </Typography>
            <Typography variant="h6" color="primary" component="p">
              <Link
                component={RouterLink}
                to="https://www.peta.org/about-peta/contact-peta/report-cruelty/"
              >
                {" "}
                Contact PETA{" "}
              </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Router>
  );
}
