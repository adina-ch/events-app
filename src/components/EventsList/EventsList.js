import { useContext, useState, useEffect } from "react";

import { EventsContext } from "../../EventsContext";

import {
  Container,
  Grid,
  List,
  ListItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";

import DetailsCard from "./Cards/DetailsCard";
import Sort from "./Actions/Sort";
import EventCard from "./Cards/EventCard";

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
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography sx={{ padding: "0.75em 0 0" }} variant="h1">
              Events
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              placeholder="Search..."
              InputProps={{
                type: "search",
              }}
              sx={{ width: "100%" }}
              onChange={handleSearch}
              value={searchTerm}
            />
          </Grid>
          <Grid item xs={12}>
            <Sort
              label="Sort by"
              labelId="sort-by"
              id="sort-by"
              options={["none", "title", "date", "description"]}
              value={sortByValue}
              handleChange={handleSortBy}
            />
            <Sort
              label="Sort order"
              labelId="sort-order"
              id="sort-order"
              options={["none", "ascending", "descending"]}
              value={sortOrderValue}
              handleChange={handleSortOrder}
            />
          </Grid>

          <Grid item xs={selectedEvent ? 6 : 12}>
            <Typography sx={{ margin: "1em 0" }} variant="h2">
              {events.length > 0 ? "Upcoming events" : "No upcoming events"}
            </Typography>
            <Box>
              <List
                sx={{
                  overflow: "auto",
                  maxHeight: 310,
                  backgroundColor: grey[100],
                  borderRadius: "6px",
                }}
              >
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
                  <Typography sx={{ padding: "1em" }}>
                    No events in the list
                  </Typography>
                )}

                {filteredEvents.length === 0 && searchTerm && (
                  <Typography sx={{ padding: "1em" }}>
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
