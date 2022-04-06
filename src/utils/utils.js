import moment from "moment";
import * as Yup from "yup";

const calcYesterday = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  return yesterday;
};

export const initialValues = {
  title: "",
  attendees: [],
  location: "",
  description: "",
  date: "",
  startTime: "",
  endTime: "",
};

export const validationSchema = Yup.object({
  title: Yup.string().trim().required("Title is required"),
  attendees: Yup.array()
    .required("Attendees are required")
    .min(1, "The event should have at least one attendee"),
  location: Yup.string().required("Location is required"),
  date: Yup.date()
    .required("Date is required")
    .min(calcYesterday(), "Date cannot be in the past"),
  startTime: Yup.string().required("Start time is required"),
  endTime: Yup.string().required("End time is required"),
});

export const capitalizeWordFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatWithComma = (array) => {
  array.map((arrayEl, index) => {
    return array.length > 1 && index < array.length - 1
      ? `${arrayEl}, `
      : arrayEl;
  });
};
