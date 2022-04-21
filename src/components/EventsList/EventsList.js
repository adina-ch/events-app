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

import {
  calculateColumns,
  sortEventsAscending,
  sortEventsDescending,
} from "../../utils/utils";
import DetailsCard from "./Cards/DetailsCard";
import EventCard from "./Cards/EventCard";
import Sort from "./Actions/Sort";
import CustomSwitch from "./Actions/Switch";

import styles from "./EventsList.module.scss";
import "../../styles/globalStyles.scss";
import DeleteModal from "./CardActions/DeleteModal";

const EventsList = () => {
  const { events, getEventsList, getActiveRoute, removeEvent } =
    useContext(EventsContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedAndFilteredEvents, setSortedAndFilteredEvents] =
    useState(events);
  const [sortValue, setSortValue] = useState("none");
  const [active, setActive] = useState(null);
  const [isDescending, setIsDescending] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [idToBeDeleted, setIdToBeDeleted] = useState(null);

  useEffect(() => {
    getEventsList();
    getActiveRoute();
  }, []);

  useEffect(() => {
    let filtered = [...events];

    if (searchTerm) {
      filtered = filtered.filter((eventItem) => {
        return (
          eventItem.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase().trim()) ||
          eventItem.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase().trim())
        );
      });
    }

    let sortedAndFiltered = [...filtered];

    if (sortValue !== "none") {
      sortedAndFiltered = getSortedEvents(sortedAndFiltered, sortValue);
    }
    setSortedAndFilteredEvents(sortedAndFiltered);
  }, [events, searchTerm, sortValue, isDescending]);

  const handleShowDetails = (id) => {
    const selected = events.find((eventItem) => eventItem.id === id);
    setSelectedEvent(selected);
    setActive(id);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getSortOrder = (isChecked) => {
    setIsDescending(isChecked);
  };

  const getSortedEvents = (filteredEv, sortCondition) => {
    if (isDescending) {
      return sortEventsDescending(filteredEv, sortCondition);
    } else {
      return sortEventsAscending(filteredEv, sortCondition);
    }
  };

  const handleSortValue = (e) => {
    setSortValue(e.target.value);
  };

  const handleDeleteEvent = (id) => {
    console.log("delete function in action");
    removeEvent(id);

    console.log(id);

    if (selectedEvent && selectedEvent.id === id) {
      setSelectedEvent(null);
    }
  };

  const handleModalVisibility = () => {
    setOpenModal(true);
  };

  return (
    <>
      <DeleteModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        idToBeDeleted={idToBeDeleted}
        handleDeleteEvent={handleDeleteEvent}
      />
      <Toolbar />
      <Container className="container">
        <Typography variant="h1">Events</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder="Search event..."
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
                value={sortValue}
                handleChange={handleSortValue}
                defaultVal={sortValue}
              />
              {sortValue !== "none" && (
                <CustomSwitch
                  isDescending={isDescending}
                  handleChange={getSortOrder}
                />
              )}
            </Stack>
          </Grid>

          <Grid item xs={calculateColumns(selectedEvent)}>
            <Typography variant="h2">
              {events.length > 0 ? "Upcoming events" : "No upcoming events"}
            </Typography>
            <Box>
              <List className={styles.cardsList}>
                {events.length > 0 ? (
                  sortedAndFilteredEvents.map((eventItem) => (
                    <ListItem key={eventItem.id}>
                      <EventCard
                        eventItem={eventItem}
                        handleShowDetails={() => {
                          handleShowDetails(eventItem.id);
                        }}
                        active={active}
                        setIdToBeDeleted={setIdToBeDeleted}
                        handleModalVisibility={handleModalVisibility}
                      />
                    </ListItem>
                  ))
                ) : (
                  <Typography variant="body1" className={styles.resultsBox}>
                    You have no events in the list.
                  </Typography>
                )}

                {sortedAndFilteredEvents.length === 0 && searchTerm && (
                  <Typography variant="body1" className={styles.resultsBox}>
                    We couldn't find any matches for "{searchTerm}". Please try
                    a different search term.
                  </Typography>
                )}
              </List>
            </Box>
          </Grid>

          {selectedEvent && (
            <Grid item xs={6}>
              <DetailsCard
                selectedEvent={selectedEvent}
                handleDeleteEvent={handleDeleteEvent}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default EventsList;
