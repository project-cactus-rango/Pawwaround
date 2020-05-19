import { colors, createMuiTheme } from "@material-ui/core";
import typography from "./typography";
import { softShadows } from "./shadows";

const themeConfig = {
  typography,
  overrides: {
    MuiInputBase: {
      input: {
        "&::placeholder": {
          opacity: 1,
          color: colors.blueGrey[600],
        },
      },
    },
  },
  palette: {
    type: "light",
    action: {
      active: colors.blueGrey[600],
    },
    background: {
      default: colors.common.white,
      dark: "#F2ECE4",
      paper: colors.common.white,
    },
    primary: {
      main: "#8CBF75",
    },
    secondary: {
      main: "#5E8C49",
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  shadows: softShadows,
};

export function createTheme() {
  let theme = createMuiTheme(themeConfig);
  return theme;
}

// /* Color Theme Swatches in Hex */
// .MORE!MILK™-1-hex { color: #F0F2F2; }
// .MORE!MILK™-2-hex { color: #5E8C49; }
// .MORE!MILK™-3-hex { color: #8CBF75; }
// .MORE!MILK™-4-hex { color: #BBD9AD; }
// .MORE!MILK™-5-hex { color: #A6823F; }
