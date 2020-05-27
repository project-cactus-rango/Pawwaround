import React, { useState } from "react";
import Header from "./Header";
import General from "./General";
import Password from "./Password";
import Delete from "./DeleteAccount";
import {
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Hidden,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
}));

export default function AccountView() {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState("general");
  const tabs = [
    { value: "general", label: "General" },
    { value: "password", label: "Password" },
    { value: "delete", label: "Delete Acount" },
  ];
  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Header />
        <Grid className={classes.root} container spacing={3}>
          <Box mt={3}>
            <Hidden smDown>
              <Tabs
                onChange={handleTabsChange}
                scrollButtons="auto"
                value={currentTab}
                orientation="vertical"
                textColor="secondary"
                className={classes.tabs}
              >
                {tabs.map(tab => (
                  <Tab key={tab.value} label={tab.label} value={tab.value} />
                ))}
              </Tabs>
            </Hidden>
            <Hidden mdUp>
              <Tabs
                onChange={handleTabsChange}
                scrollButtons="auto"
                value={currentTab}
                textColor="secondary"
                className={classes.tabs}
              >
                {tabs.map(tab => (
                  <Tab key={tab.value} label={tab.label} value={tab.value} />
                ))}
              </Tabs>
            </Hidden>
          </Box>
          <Grid item lg={10} md={10} xl={9} xs={12}>
            <Card>
              <CardContent>
                {currentTab === "general" && <General />}
                {currentTab === "password" && <Password />}
                {currentTab === "delete" && <Delete />}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
