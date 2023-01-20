import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const themeProvider = (modeVersion: boolean) =>
  createTheme({
    palette: {
      // mode: modeVersion ? "light" : "dark",
      ...(modeVersion
        ? {
            // palette values for light mode
            primary: grey,
            divider: grey[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            background: {
              default: grey[500],
              paper: grey[300],
            },
          }
        : {
            // palette values for dark mode
            primary:grey,
            divider: grey[700],
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  });
