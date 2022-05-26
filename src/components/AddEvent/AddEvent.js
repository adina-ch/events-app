import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "../../styles/globalStyles.scss";

import { EventsContext } from "../../EventsContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";
import EventForm from "../Form/EventForm";

import { initialValues } from "../../utils/utils";

const AddEvent = () => {
  const { createEvent, getActiveRoute } = useContext(EventsContext);
  const { updateSnack } = useContext(SnackbarContext);

  useEffect(() => {
    getActiveRoute();
  }, []);

  const navigate = useNavigate();

  const handleCreateEvent = (event, description) => {
    createEvent({
      ...event,
      description: description || "No description provided",
    })
      .then((response) => {
        updateSnack("Event created successfully!", true, "success");
      })
      .catch((error) => {
        updateSnack(
          "Something went wrong. Please try again later.",
          true,
          "error"
        );
      });
  };

  const handleSubmit = (values, { resetForm }) => {
    const { description } = values;

    handleCreateEvent(values, description);

    setTimeout(() => {
      updateSnack("", false, "success");
    }, 2500);

    resetForm();

    navigate("/");
  };

  return (
    <EventForm
      pageTitle="Create new event"
      onSubmit={handleSubmit}
      submitBtnText="CREATE"
      cancelBtnText="CANCEL"
      initialValues={initialValues}
    />
  );
};

export default AddEvent;
