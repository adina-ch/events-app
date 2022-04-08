import { Paper, Typography } from "@mui/material";
import "./../styles.scss";

const EventCard = ({ eventItem, handleShowDetails }) => {
  const { title, date, startTime, endTime, description } = eventItem;
  return (
    <Paper elevation={1} className="card" onClick={handleShowDetails}>
      <Typography variant="h6">{title}</Typography>

      <Typography variant="body2" className="margin">
        {date}, {startTime} - {endTime}
      </Typography>

      <Typography variant="body2" noWrap>
        {description}
      </Typography>
    </Paper>
  );
};

export default EventCard;
