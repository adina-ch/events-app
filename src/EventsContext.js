import { useState, createContext } from "react";

export const EventsContext = createContext();

export const EventsProvider = (props) => {
  const [events, setEvents] = useState([]);
  return (
    <EventsContext.Provider value={[events, setEvents]}>
      {props.children}
    </EventsContext.Provider>
  );
};
