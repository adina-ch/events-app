import { useState, createContext, useContext } from "react";

import { addEvent, fetchEvents, deleteEvent } from "./API/events";
import { SnackbarContext } from "./contexts/SnackbarContext";

export const EventsContext = createContext();

export const EventsProvider = (props) => {
  const [events, setEvents] = useState([]);
  const { updateSnack } = useContext(SnackbarContext);

  const updateLoadedEvents = (data) => {
    const loadedEvents = [];
    for (const key in data) {
      loadedEvents.push({
        ...data[key],
        id: key,
      });
    }
    setEvents(loadedEvents);
  };

  const getEventsList = async () => {
    try {
      const events = await fetchEvents();
      updateLoadedEvents(events);
    } catch (error) {
      return error;
    }
  };

  const createEvent = async (event) => {
    try {
      await addEvent(event);
      getEventsList();
    } catch (error) {
      return error;
    }
  };

  const removeEvent = async (eventId) => {
    try {
      await deleteEvent(eventId);
      getEventsList();
      updateSnack("Event was deleted successfully!", true, "success");
    } catch (error) {
      updateSnack(
        "Could not delete the specified event. Please try again later",
        true,
        "error"
      );
      return error;
    }
    setTimeout(() => {
      updateSnack("", false, "success");
    }, 2500);
  };

  return (
    <EventsContext.Provider
      value={{ events, getEventsList, createEvent, removeEvent }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};
