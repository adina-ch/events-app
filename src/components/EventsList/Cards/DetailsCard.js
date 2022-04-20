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

import { formatDate } from "../../../utils/utils";

import styles from "../EventsList.module.scss";

const DetailsCard = ({ selectedEvent, handleDeleteEvent }) => {
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

  return (
    <>
      <Typography variant="h2">Selected event</Typography>
      <Paper variant="outlined" className={styles.card}>
        <div className={styles.cardActions}>
          <Tooltip title="Edit">
            <IconButton>
              <EditOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              onClick={() => {
                handleDeleteEvent(id);
              }}
            >
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2" className={styles.cardText}>
          Date: {formatDate(date)}
        </Typography>

        <Typography variant="body2" className={styles.cardText}>
          Time: {startTime} - {endTime}
        </Typography>

        <Typography variant="body2" className={styles.cardText}>
          Attendees:
        </Typography>

        <Stack direction="row" spacing={1}>
          {attendees.map((attendee, index) => (
            <Chip label={attendee.name} key={index} />
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
