import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import classes from "./Loading.module.scss";

const Loading = () => {
  return (
    <Box className={classes.box}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
