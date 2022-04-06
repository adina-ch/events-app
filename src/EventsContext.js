import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { addEvent, fetchEvents } from "./API/events";
import { fetchAttendees } from "./API/attendees";

export const EventsContext = createContext();

export const EventsProvider = (props) => {
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   getEventsList();

  // }, []);

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

  return (
    <EventsContext.Provider value={{ events, getEventsList, createEvent }}>
      {props.children}
      {/* add snackbar */}
    </EventsContext.Provider>
  );
};
