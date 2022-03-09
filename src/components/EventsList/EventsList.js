import React from "react";
import { SubTitle, Title } from "../../assets/styles/shared.styled";

import EventCard from "../EventCard/EventCard";
import Filter from "../Filter/Filter";
import SearchForm from "../Search/SearchForm";
import Sort from "../Sort/Sort";
import {
  AllEvents,
  AllEventsAndActions,
  SortFilter,
  StyledActions,
  StyledDetails,
  StyledEventsList,
} from "./EventsList.styled";

const EventsList = () => {
  return (
    <>
      <Title>Events</Title>
      <StyledEventsList>
        {/* search container */}
        <AllEventsAndActions>
          <StyledActions>
            <SearchForm />
            {/* filter and sort container */}
            <SortFilter>
              <Sort />
              <Filter />
            </SortFilter>
          </StyledActions>
          {/* details container */}
          <AllEvents>
            <SubTitle>Upcoming events</SubTitle>
            <ul>
              {/* map to have all the events */}
              {/* add a class for ellipsis when the text is too long */}
              <EventCard />
              <EventCard />
              <EventCard />
            </ul>
          </AllEvents>
        </AllEventsAndActions>
        {/* render same list as in All events */}
        {/* map to have all the events with all the details - without ellipsis*/}
        {/* when one event is clicked  show only that event with all the details  */}
        {/* <StyledDetails>
          <SubTitle>Selected Event details</SubTitle>

          <ul>
            <EventCard />
            <EventCard />
            <EventCard />
          </ul>
        </StyledDetails> */}
      </StyledEventsList>
    </>
  );
};

export default EventsList;
