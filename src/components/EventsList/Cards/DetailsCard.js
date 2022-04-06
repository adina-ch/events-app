import { Chip, Paper, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const DetailsCard = ({ selectedEvent }) => {
  const { title, date, attendees, location, startTime, endTime, description } =
    selectedEvent;

  return (
    <>
      <Typography sx={{ margin: "1em 0" }} variant="h2">
        Selected event
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          padding: "1em",
        }}
      >
        <Typography variant="h6" sx={{ paddingBottom: "0.5em" }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ padding: "0.5em" }}>
          Date: {date}
        </Typography>

        <Typography variant="body2" sx={{ padding: "0.5em" }}>
          Time: {startTime} - {endTime}
        </Typography>

        <Typography variant="body2" sx={{ padding: "0.5em" }}>
          Attendees:
        </Typography>

        <Stack direction="row" spacing={1}>
          {attendees.map((attendee, index) => (
            <Chip label={attendee.name} key={index} />
          ))}
        </Stack>

        <Typography variant="body2" sx={{ padding: "0.5em" }}>
          Location: {location}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            overflow: "auto",
            maxHeight: 110,
            padding: "1em 0",
            borderTop: `1px solid ${grey[300]}`,
          }}
        >
          {description}
        </Typography>
      </Paper>
    </>
  );
};

export default DetailsCard;
