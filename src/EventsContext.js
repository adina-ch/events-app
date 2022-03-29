import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const EventsContext = createContext();

export const EventsProvider = (props) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEventsList();
  }, []);

  const updateLoadedEvents = (data) => {
    const loadedEvents = [];
    for (const key in data) {
      loadedEvents.push({
        id: key,
        title: data[key].title,
        attendees: data[key].attendees,
        location: data[key].location,
        description: data[key].description,
        date: data[key].date,
        startTime: data[key].time,
        endTime: data[key].time,
      });
    }
    console.log(loadedEvents);
    setEvents(loadedEvents);
  };

  const getEventsList = () => {
    axios
      .get(
        "https://react-events-app-7e674-default-rtdb.europe-west1.firebasedatabase.app/events.json"
      )
      .then((response) => {
        updateLoadedEvents(response.data);
      })
      .catch((error) => {});
  };

  // const getEventsList2 = async () => {
  //   const { data, error, status,  } = fetchEvents()
  //   updateLoadedEvents(data);
  // }

  return (
    <EventsContext.Provider value={{ events, getEventsList }}>
      {props.children}
    </EventsContext.Provider>
  );
};
