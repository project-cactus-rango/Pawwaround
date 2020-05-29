import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  card: {
    height: "100%",
    maxWidth: 245,
    margin: theme.spacing(1),
  },
  media: {
    height: 140,
  },
}));

export default function UsefulLinks() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card variant="outlined" className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://tapinto-production.s3.amazonaws.com/uploads/articles/as/best_crop_c968f78fa94515c8de9d_aspca.jpg?v=3f72517a147064d02c67"
            title="ASPCA"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              ASPCA Rescue
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The ASPCA is a national leader in animal rescue and protection,
              working tirelessly to put an end to animal abuse and neglect. You
              can fight cruelty and give animals nationwide a second chance at
              life.{" "}
            </Typography>
            <Typography variant="h6" color="primary" component="p">
              <Link href="https://secure.aspca.org/donate/ps-gn-p2?ms=MP_PMK_Googlebrand-T4&initialms=MP_PMK_Googlebrand-T4&pcode=WPSE9XXGOGN2PK00014&lpcode=WPSE9XXGOGN1PK00014&test&ds_rl=1066461&gclid=CjwKCAjw2a32BRBXEiwAUcugiDv3glkC83izvkwo3V97mW6-9fe_AL3xtiWUgcH6kNej43SLIVVWqxoClHEQAvD_BwE&gclsrc=aw.ds">
                {" "}
                Contribute Here!{" "}
              </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card variant="outlined" className={classes.card}>
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
              <Link href="https://www.peta.org/about-peta/contact-peta/report-cruelty/">
                {" "}
                Contact PETA{" "}
              </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
