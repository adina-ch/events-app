import { useContext } from "react";

import { EventsContext } from "../../../EventsContext";

import {
  Chip,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import {
  capitalizeWordFirstLetter,
  formatDate,
  formatHour,
} from "../../../utils/utils";

import styles from "../EventsList.module.scss";
import { useNavigate } from "react-router-dom";

const DetailsCard = ({
  setIdToBeDeleted,
  handleModalVisibility,
  updateModalContent,
}) => {
  const { selectedEvent, setEventIdToBeEdited } = useContext(EventsContext);
  const {
    title,
    date,
    attendees,
    location,
    startTime,
    endTime,
    description,
    id,
  } = selectedEvent;

  const navigate = useNavigate();

  const handleDelete = (id) => {
    setIdToBeDeleted(id);
    handleModalVisibility();
    updateModalContent(
      `Delete confirmation for: ${capitalizeWordFirstLetter(title)}`,
      "Do you really want to delete this event? This action cannot be undone.",
      "CANCEL",
      "DELETE"
    );
  };

  const handleEdit = (id) => {
    setEventIdToBeEdited(id);
    navigate(`edit/${id}`);
  };

  return (
    <>
      <Typography variant="h2">Selected event</Typography>
      <Paper variant="outlined" className={styles.card}>
        <div className={styles.cardHeader}>
          <Typography variant="h6">
            {capitalizeWordFirstLetter(title)}
          </Typography>
          <div className={styles.cardActions}>
            <Tooltip title="Edit">
              <IconButton
                onClick={(event) => {
                  handleEdit(id);
                  event.stopPropagation();
                }}
              >
                <EditOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                onClick={() => {
                  handleDelete(id);
                }}
              >
                <DeleteOutlineOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        </div>

        <Typography variant="body2" className={styles.cardText}>
          Date: {formatDate(date)}
        </Typography>

        <Typography variant="body2" className={styles.cardText}>
          Time: {formatHour(startTime)} - {formatHour(endTime)}
        </Typography>

        <Typography variant="body2" className={styles.cardText}>
          Attendees:
        </Typography>

        <Stack direction="row" spacing={1} className={styles.attendeesWrapper}>
          {attendees.map((attendee, index) => (
            <Chip
              label={attendee.name}
              key={index}
              className={styles.attendee}
            />
          ))}
        </Stack>

        <Typography variant="body2" className={styles.cardText}>
          Location: {location}
        </Typography>

        <Typography variant="body2" className={styles.selectedCardDescription}>
          {description}
        </Typography>
      </Paper>
    </>
  );
};

export default DetailsCard;
