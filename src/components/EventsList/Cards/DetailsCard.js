import { Paper, Typography } from "@mui/material";
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
        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2" sx={{ paddingBottom: "1em" }}>
          Date: {date}
        </Typography>

        <Typography variant="body2" sx={{ paddingBottom: "1em" }}>
          Time: {startTime} - {endTime}
        </Typography>

        <Typography variant="body2" sx={{ paddingBottom: "1em" }}>
          Attendees: {attendees}
        </Typography>

        <Typography variant="body2" sx={{ paddingBottom: "1em" }}>
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
