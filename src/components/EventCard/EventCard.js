import React from "react";

import { Card } from "./EventCard.styled";

const EventCard = ({ eventItem, handleShowDetails }) => {
  const { title, date, time, description } = eventItem;
  return (
    <li>
      <Card onClick={handleShowDetails}>
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <p className="date-time">
          {date}, <span>{time}</span>
        </p>
        <p className="description">{description}</p>
      </Card>
    </li>
  );
};

export default EventCard;
