import { NavLink } from "react-router-dom";

import { Button, Typography } from "@mui/material";
import notFound from "./not_found.svg";

import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.deleteModalWrapper}>
      <Typography variant="h1">Event not found</Typography>
      <Typography variant="body1">
        The event you are looking for might have been removed.
      </Typography>
      <img
        src={notFound}
        alt="Event not found"
        className={styles.notFoundImg}
      />
      <Button variant="contained" component={NavLink} to="/">
        GO TO HOMEPAGE
      </Button>
    </div>
  );
};

export default ErrorPage;
