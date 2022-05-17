import { NavLink } from "react-router-dom";

import { Button, Container, Toolbar, Typography } from "@mui/material";
import notFound from "./not_found.svg";

import styles from "./ErrorPage.module.scss";
import { useContext, useEffect } from "react";
import { EventsContext } from "../../EventsContext";

const ErrorPage = () => {
  const { setActiveRouteValue } = useContext(EventsContext);

  useEffect(() => {
    setActiveRouteValue(false);
  }, []);

  return (
    <>
      <Toolbar />
      <Container className="container">
        <Typography variant="h1">Event not found</Typography>
        <Typography variant="body1">
          The event you are looking for might have been removed.
        </Typography>
        <img
          src={notFound}
          alt="Event not found"
          className={styles.notFoundImg}
        />
        <Button
          variant="contained"
          component={NavLink}
          to="/"
          className={styles.goHomeBtn}
        >
          GO TO HOMEPAGE
        </Button>
      </Container>
    </>
  );
};

export default ErrorPage;
