import React from "react";
import Routes from "./routes";

//Meterial UI imports
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
