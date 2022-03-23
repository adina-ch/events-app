import * as Yup from "yup";

export const initialValues = {
  title: "",
  attendees: "",
  location: "",
  description: "",
  date: "",
  time: "",
};

export const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  attendees: Yup.string().required("Attendees are required"),
  location: Yup.string().required("Location is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
});
