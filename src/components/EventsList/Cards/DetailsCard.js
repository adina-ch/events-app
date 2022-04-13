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

import "./../styles.scss";

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
      <Paper variant="outlined" className="padding card-actions-parent">
        <div className="card-actions">
          <Tooltip title="Edit">
            <IconButton>
              <EditOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              onClick={() => {
                handleDeleteEvent(id);
              }}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2" className="margin">
          Date: {date}
        </Typography>

        <Typography variant="body2" className="margin">
          Time: {startTime} - {endTime}
        </Typography>

        <Typography variant="body2" className="margin">
          Attendees:
        </Typography>

        <Stack direction="row" spacing={1}>
          {attendees.map((attendee, index) => (
            <Chip label={attendee.name} key={index} />
          ))}
        </Stack>

        <Typography variant="body2" className="margin">
          Location: {location}
        </Typography>

        <Typography variant="body2" className="description">
          {description}
        </Typography>
      </Paper>
    </>
  );
};

export default DetailsCard;
