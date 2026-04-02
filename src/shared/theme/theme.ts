import { createTheme } from "@mui/material/styles";

import { appPalette } from "./palette";

export const appTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: appPalette.background.default,
      paper: appPalette.background.surface,
    },
    primary: {
      main: appPalette.brand.primary,
    },
    secondary: {
      main: appPalette.brand.secondary,
    },
    text: {
      primary: appPalette.text.primary,
      secondary: appPalette.text.secondary,
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 800,
      letterSpacing: "0.08em",
    },
    h2: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${appPalette.border.subtle}`,
          backgroundColor: appPalette.background.overlay,
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});