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
  const { events } = useContext(EventsContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    const filtered = events.filter((eventItem) => {
      return (
        eventItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eventItem.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    console.log("1. filtered: ");
    console.log(filtered);
    setFilteredEvents(filtered);
  }, [events, searchTerm]);

  const handleShowDetails = (id) => {
    const selected = events.find((eventItem) => eventItem.id === id);
    setSelectedEvent(selected);
    console.log(selected);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Title>Events</Title>
      <StyledEventsList>
        <AllEventsAndActions>
          <div>
            <SearchForm handleSearch={handleSearch} />
            <SortFilter>
              <Sort />
              <Filter />
            </SortFilter>
          </div>
          <div>
            <SubTitle>Upcoming events</SubTitle>
            <ul>
              {events.length > 0 &&
                filteredEvents.map((eventItem) => {
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
              <h3>{selectedEvent.title}</h3>
              <BsThreeDots className="more" />
            </div>
            <div>
              <MdPeople className="icon" />
              {selectedEvent.attendees}
            </div>
            <div>
              <MdEventNote className="icon" />
              {selectedEvent.date}, {selectedEvent.time}
            </div>
            <div>
              <MdLocationOn className="icon" />
              {selectedEvent.location}
            </div>
            <div>
              <CgDetailsMore className="icon" />
              {selectedEvent.description}
            </div>
          </StyledDetails>
        )}
      </StyledEventsList>
    </>
  );
};

export default EventsList;
