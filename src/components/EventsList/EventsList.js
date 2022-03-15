import React, { useContext, useState, useEffect } from "react";

import { EventsContext } from "../../EventsContext";

import axios from "axios";

import { MdPeople, MdLocationOn, MdEventNote } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";

import { SubTitle, Title } from "../../assets/styles/shared.styled";
import {
  AllEventsAndActions,
  SortFilter,
  StyledDetails,
  StyledEventsList,
} from "./EventsList.styled";

import EventCard from "../EventCard/EventCard";
import Filter from "../Filter/Filter";
import SearchForm from "../Search/SearchForm";
import Sort from "../Sort/Sort";

const EventsList = () => {
  const [events, setEvents] = useContext(EventsContext);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
        time: data[key].time,
      });
    }
    setEvents(loadedEvents);
  };

  const getEventsList = () => {
    axios
      .get(
        "https://react-events-app-7e674-default-rtdb.europe-west1.firebasedatabase.app/events.json"
      )
      .then((response) => {
        console.log(response.data);
        updateLoadedEvents(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const handleShowDetails = (id) => {
    const selected = events.filter((eventItem) => eventItem.id === id);
    setSelectedEvent(selected);
    console.log(selected);
  };

  return (
    <>
      <Title>Events</Title>
      <StyledEventsList>
        <AllEventsAndActions>
          <div>
            <SearchForm />
            <SortFilter>
              <Sort />
              <Filter />
            </SortFilter>
          </div>
          <div>
            <SubTitle>Upcoming events</SubTitle>
            <ul>
              {events.length > 0 &&
                events.map((eventItem) => {
                  return (
                    <EventCard
                      key={eventItem.id}
                      eventItem={eventItem}
                      handleShowDetails={() => {
                        handleShowDetails(eventItem.id);
                      }}
                    />
                  );
                })}
            </ul>
          </div>
        </AllEventsAndActions>
        {selectedEvent && (
          <StyledDetails>
            <SubTitle>Selected Event details</SubTitle>
            <div className="details-header">
              <h3>{selectedEvent[0].title}</h3>
              <BsThreeDots className="more" />
            </div>
            <div>
              <MdPeople className="icon" />
              {selectedEvent[0].attendees}
            </div>
            <div>
              <MdEventNote className="icon" />
              {selectedEvent[0].date}, {selectedEvent[0].time}
            </div>
            <div>
              <MdLocationOn className="icon" />
              {selectedEvent[0].location}
            </div>
            <div>
              <CgDetailsMore className="icon" />
              {selectedEvent[0].description}
            </div>
          </StyledDetails>
        )}
      </StyledEventsList>
    </>
  );
};

export default EventsList;
