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
    },

    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
  },
});
