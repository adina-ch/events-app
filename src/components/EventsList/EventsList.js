import { useContext, useState, useEffect } from "react";

import { EventsContext } from "../../EventsContext";

import {
  Grid,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

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
import DeleteModal from "./DeleteModal/DeleteModal";

const EventsList = () => {
  const {
    events,
    getEventsList,
    getActiveRoute,
    selectedEvent,
    setSelectedEvent,
    removeEvent,
  } = useContext(EventsContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortedAndFilteredEvents, setSortedAndFilteredEvents] =
    useState(events);
  const [sortValue, setSortValue] = useState("none");
  const [active, setActive] = useState(null);
  const [isDescending, setIsDescending] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [idToBeDeleted, setIdToBeDeleted] = useState(null);
  const [modalContent, setModalContent] = useState({
    modalTitle: "",
    modalContent: "",
    cancelBtnText: "",
    deleteBtnText: "",
  });

  useEffect(() => {
    getEventsList();
    getActiveRoute();

    selectedEvent && setActive(selectedEvent.id);
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

  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));

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

  const handleDeleteEvent = () => {
    removeEvent(idToBeDeleted);
    setOpenModal(false);

    if (selectedEvent && selectedEvent.id === idToBeDeleted) {
      setSelectedEvent(null);
    }
  };

  const handleCancel = () => {};

  const handleModalVisibility = () => {
    setOpenModal(true);
  };

  const updateModalContent = (
    modalTitle,
    modalText,
    cancelBtnText,
    confirmBtnText
  ) => {
    setModalContent({
      modalTitle,
      modalText,
      cancelBtnText,
      confirmBtnText,
    });
  };

  return (
    <>
      <DeleteModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onConfirm={handleDeleteEvent}
        onCancel={handleCancel}
        modalContent={modalContent}
      />

      <Typography variant="h1">Events</Typography>
      <Grid container spacing={2} className={styles.eventsContainer}>
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
          <Stack direction={largeScreen ? "row" : "column"} spacing={3}>
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

        <Grid item xs={12} md={calculateColumns(selectedEvent)}>
          <Typography variant="h2">
            {events.length > 0 ? "Upcoming events" : "No upcoming events"}
          </Typography>

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
                    updateModalContent={updateModalContent}
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
                We couldn't find any matches for "{searchTerm}". Please try a
                different search term.
              </Typography>
            )}
          </List>
        </Grid>

        {selectedEvent && (
          <Grid item xs={12} md={6}>
            <DetailsCard
              setIdToBeDeleted={setIdToBeDeleted}
              handleModalVisibility={handleModalVisibility}
              updateModalContent={updateModalContent}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default EventsList;
