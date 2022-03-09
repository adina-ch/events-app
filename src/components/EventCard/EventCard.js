import React from "react";
import { Card } from "./EventCard.styled";
import { MdArrowDropDown } from "react-icons/md";

const EventCard = () => {
  return (
    <li>
      <Card>
        {/* <div className="date-time">
          <p>
            12-Mar-2021, <span>15:40</span>
          </p>
          <MdArrowDropDown size={20} />
        </div>
        <h3>Event title</h3> */}

        <div className="card-title">
          <h3>Event title</h3>
          <MdArrowDropDown size={20} />
        </div>

        <p className="date-time">
          12-Mar-2021, <span>15:40</span>
        </p>

        <p className="description">Event description....</p>
      </Card>
    </li>
  );
};

export default EventCard;
