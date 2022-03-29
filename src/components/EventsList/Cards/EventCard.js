import { Paper, Typography } from "@mui/material";

const EventCard = ({ eventItem, handleShowDetails }) => {
  const { title, date, startTime, endTime, description } = eventItem;
  return (
    <Paper
      elevation={1}
      sx={{ width: "100%", padding: "1em", cursor: "pointer" }}
      onClick={handleShowDetails}
    >
      <Typography variant="h6">{title}</Typography>

      <Typography variant="body2" sx={{ paddingBottom: "1em" }}>
        {date}, {startTime} - {endTime}
      </Typography>

      <Typography variant="body2" noWrap>
        {description}
      </Typography>
    </Paper>
  );
};

export default EventCard;
