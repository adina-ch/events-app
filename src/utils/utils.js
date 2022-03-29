import * as Yup from "yup";

export const initialValues = {
  title: "",
  attendees: "",
  location: "",
  description: "",
  date: "",
  startTime: "",
  endTime: "",
};

export const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  attendees: Yup.string().required("Attendees are required"),
  location: Yup.string().required("Location is required"),
  date: Yup.string().required("Date is required"),
  startTime: Yup.string().required("Start time is required"),
  endTime: Yup.string().required("End time is required"),
});

export const capitalizeWordFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
