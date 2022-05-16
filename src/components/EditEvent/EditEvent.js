import { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import "../../styles/globalStyles.scss";

import { EventsContext } from "../../EventsContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";
import EventForm from "../Form/EventForm";

import { fetchEventToBeEdited } from "../../API/events";

const EditEvent = () => {
  const { updateEvent, getActiveRoute } = useContext(EventsContext);
  const { updateSnack } = useContext(SnackbarContext);

  const [eventToBeEdited, setEventToBeEdited] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id: eventIdFromUrl } = useParams();

  useEffect(() => {
    getActiveRoute();

    setLoading(true);

    if (eventIdFromUrl) {
      fetchEventToBeEdited(eventIdFromUrl)
        .then((result) => {
          setLoading(false);
          setEventToBeEdited(result);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      navigate("/not-found");
    }
  }, []);

  const handleEditEvent = (id, event) => {
    updateEvent(id, { ...event })
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

  const handleSubmit = (values, { resetForm }) => {
    handleEditEvent(eventIdFromUrl, values);

    setTimeout(() => {
      updateSnack("", false, "success");
    }, 2500);
    resetForm();
    navigate("/");
  };

  return (
    <>
      {eventToBeEdited && (
        <EventForm
          pageTitle="Edit event"
          onSubmit={handleSubmit}
          submitBtnText="EDIT"
          cancelBtnText="CANCEL"
          initialValues={eventToBeEdited}
          attendeesDefaultValue={eventToBeEdited.attendees}
        />
      )}
    </>
  );
};

export default EditEvent;
