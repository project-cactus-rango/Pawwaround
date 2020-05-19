import React from "react";
import Routes from "./routes";

//Meterial UI imports
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles, createStyles } from "@material-ui/core";
import { createTheme } from "./theme";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        width: "100%",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
    },
  })
);

function App() {
  useStyles();
  return (
    <ThemeProvider theme={createTheme()}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
