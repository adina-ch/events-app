import React from "react";
import { StyledButton, Title } from "../../assets/styles/shared.styled";
import { CreateEvent, InputWrapper } from "./AddEvent.styled";
import ScheduleImg from "../../assets/images/schedule.svg";

const AddEvent = () => {
  return (
    <CreateEvent>
      <Title>Create new event</Title>
      <form className="create-event-form">
        <InputWrapper>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="attendees">Attendees</label>
          <input type="text" id="attendees" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" rows="5"></textarea>
        </InputWrapper>
        <InputWrapper>
          <label>Date and time picker</label>
          <input type="date" />
          <input type="time" />
        </InputWrapper>

        <div className="btn-wrapper">
          <StyledButton primary>Create</StyledButton>
          <StyledButton>Cancel</StyledButton>
        </div>
      </form>
      {/* <div className="img-wrapper">
          <img src={ScheduleImg} alt="schedule image" />
        </div> */}
    </CreateEvent>
  );
};

export default AddEvent;
