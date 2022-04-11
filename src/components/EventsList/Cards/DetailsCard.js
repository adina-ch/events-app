import { Chip, Paper, Stack, Typography } from "@mui/material";

import "./../styles.scss";

const DetailsCard = ({ selectedEvent }) => {
  const { title, date, attendees, location, startTime, endTime, description } =
    selectedEvent;

  return (
    <>
      <Typography variant="h2">Selected event</Typography>
      <Paper variant="outlined" className="padding">
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
