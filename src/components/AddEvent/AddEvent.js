import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { EventsContext } from "../../EventsContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";
import EventForm from "../Form/EventForm";

import { initialValues } from "../../utils/utils";

const AddEvent = () => {
  const { createEvent } = useContext(EventsContext);
  const { updateSnack } = useContext(SnackbarContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleCreateEvent = (event, description) => {
    setLoading(true);

    createEvent({
      ...event,
      description: description || "No description provided",
    })
      .then((response) => {
        updateSnack("Event created successfully!", true, "success");
        setLoading(false);
      })
      .catch((error) => {
        updateSnack(
          "Something went wrong. Please try again later.",
          true,
          "error"
        );
        setLoading(false);
      });
  };

  const handleSubmit = (values, { resetForm }) => {
    const { description } = values;

    handleCreateEvent(values, description);

    setTimeout(() => {
      updateSnack("", false, "success");
    }, 2500);

    if (!loading) {
      resetForm();
      navigate("/");
    }
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
