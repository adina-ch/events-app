import { createTheme } from "@mui/material/styles";

const mainPurple = "#735BF2";
const mainOrange = "#F2CA74";

export default createTheme({
  palette: {
    common: {
      purple: `${mainPurple}`,
      orange: `${mainOrange}`,
    },

    primary: {
      main: `${mainPurple}`,
    },
    secondary: {
      main: `${mainOrange}`,
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
      padding: "0.75em 0",
    },

    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
      padding: "0.5em 0",
    },
  },

  h6: {
    padding: "0.5em",
  },

  body2: {
    padding: "0.5em",
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          padding: "0.5em 2em",
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        padding: "1em",
      },
    },
  },
});
