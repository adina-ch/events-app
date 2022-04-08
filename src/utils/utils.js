import moment from "moment";
import * as Yup from "yup";

const GRID_MIN_WIDTH_XS = 6;
const GRID_FULL_WIDTH_XS = 12;
export const DRAWER_WIDTH = 200;

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

export const addPadding = ({
  children,
  all,
  top,
  right,
  bottom,
  left,
  style = {},
}) => {
  const paddingStyles = {};
  paddingStyles.top = top || all;
  paddingStyles.right = right || all;
  paddingStyles.bottom = bottom || all;
  paddingStyles.left = left || all;

  return (
    <div
      style={{
        ...style,
        paddingStyles,
      }}
    >
      {children}
    </div>
  );
};

export const calculateColumns = (condition) => {
  return condition ? 6 : 12;
};
