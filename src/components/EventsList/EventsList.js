import { useContext, useState, useEffect } from "react";

import { EventsContext } from "../../EventsContext";

import {
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import "./styles.scss";
import "../../global/globalStyles.scss";
import { calculateColumns } from "../../utils/utils";
import DetailsCard from "./Cards/DetailsCard";
import EventCard from "./Cards/EventCard";
import Sort from "./Actions/Sort";
import CustomSwitch from "./Actions/Switch";

const EventsList = () => {
  const { events } = useContext(EventsContext);
  const { getEventsList } = useContext(EventsContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [sortByValue, setSortByValue] = useState("");
  const [sortOrderValue, setSortOrderValue] = useState("");

  useEffect(() => {
    getEventsList();
  }, []);

  useEffect(() => {
    console.log(events);
    const filtered = events.filter((eventItem) => {
      return (
        eventItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eventItem.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredEvents(filtered);
  }, [events, searchTerm]);

  const handleShowDetails = (id) => {
    const selected = events.find((eventItem) => eventItem.id === id);
    setSelectedEvent(selected);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortBy = (e) => {
    setSortByValue(e.target.value);
  };

  const handleSortOrder = (e) => {
    setSortOrderValue(e.target.value);
  };

  return (
    <>
      <Toolbar />
      <Container className="container">
        <Typography variant="h1">Events</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder="Search..."
              InputProps={{
                type: "search",
              }}
              fullWidth={true}
              onChange={handleSearch}
              value={searchTerm}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Sort
                label="Sort by"
                labelId="sort-by"
                id="sort-by"
                options={["none", "title", "date", "description"]}
                value={sortByValue}
                handleChange={handleSortBy}
              />
              <CustomSwitch />
            </Stack>
          </Grid>

          <Grid item xs={calculateColumns(selectedEvent)}>
            <Typography variant="h2">
              {events.length > 0 ? "Upcoming events" : "No upcoming events"}
            </Typography>
            <Box>
              <List className="list">
                {events.length > 0 ? (
                  filteredEvents.map((eventItem) => (
                    <ListItem key={eventItem.id}>
                      <EventCard
                        eventItem={eventItem}
                        handleShowDetails={() => {
                          handleShowDetails(eventItem.id);
                        }}
                      />
                    </ListItem>
                  ))
                ) : (
                  <Typography variant="body1" className="padding">
                    You have no events in the list.
                  </Typography>
                )}

                {filteredEvents.length === 0 && searchTerm && (
                  <Typography variant="body1" className="padding">
                    We couldn't find any matches for "{searchTerm}". Please try
                    a different search term.
                  </Typography>
                )}
              </List>
            </Box>
          </Grid>

          {selectedEvent && (
            <Grid item xs={6}>
              <DetailsCard selectedEvent={selectedEvent} />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default EventsList;
