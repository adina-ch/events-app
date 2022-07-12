import { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { EventsContext } from "../../EventsContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";
import EventForm from "../Form/EventForm";

import { fetchEventToBeEdited } from "../../API/events";

const EditEvent = () => {
  const { updateEvent } = useContext(EventsContext);
  const { updateSnack } = useContext(SnackbarContext);

  const [eventToBeEdited, setEventToBeEdited] = useState(null);

  const navigate = useNavigate();
  const { id: eventIdFromUrl } = useParams();

  useEffect(() => {
    if (eventIdFromUrl) {
      fetchEventToBeEdited(eventIdFromUrl)
        .then((result) => {
          if (result) {
            setEventToBeEdited(result);
          } else {
            navigate("/error");
          }
        })
        .catch((err) => {
          return err;
        });
    }
  }, []);

  const handleEditEvent = async (id, event) => {
    await updateEvent(id, { ...event })
      .then((response) => {
        updateSnack("Event edited successfully!", true, "success");
      })
      .catch((error) => {
        updateSnack(
          "Something went wrong. Please try again later.",
          true,
          "error"
        );
      });
  };

  const handleSubmit = async (values, { resetForm }) => {
    await handleEditEvent(eventIdFromUrl, values);

    setTimeout(() => {
      updateSnack("", false, "success");
    }, 2500);
    resetForm();
    navigate("/");
  };

  return (
    eventToBeEdited && (
      <EventForm
        pageTitle="Edit event"
        onSubmit={handleSubmit}
        submitBtnText="EDIT"
        cancelBtnText="CANCEL"
        initialValues={eventToBeEdited}
      />
    )
  );
};

export default EditEvent;
