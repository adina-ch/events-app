import moment from "moment";
import * as Yup from "yup";

const GRID_MIN_WIDTH_XS = 6;
const GRID_FULL_WIDTH_XS = 12;
export const DRAWER_WIDTH = 200;
export const SORT_FIELD_OPTIONS = [
  { value: "none", label: "None", id: 1 },
  { value: "title", label: "Title", id: 2 },
  { value: "date", label: "Date", id: 3 },
  { value: "description", label: "Description", id: 4 },
];

const getNewDateWithParams = (date, time) => {
  return new Date(`${date}T${time}`);
};

const getYesterday = () => {
  return moment().subtract(1, "days").toString();
};

const getCurrentDate = () => {
  return moment();
};

const getInitialStartTime = () => {
  const currentHour = moment();
  const initialStartTime = currentHour.add(60, "minutes").startOf("hour");

  return initialStartTime;
};

const getInitialEndTime = () => {
  const initialStartTime = getInitialStartTime();
  return initialStartTime.add(30, "minutes");
};

export const initialValues = {
  title: "",
  attendees: [],
  location: "",
  description: "",
  date: getCurrentDate(),
  startTime: getInitialStartTime(),
  endTime: getInitialEndTime(),
};

export const validationSchema = Yup.object({
  title: Yup.string().trim().required("Title is required"),
  attendees: Yup.array()
    .required("Attendees are required")
    .min(1, "The event should have at least one attendee"),
  location: Yup.string().required("Location is required"),
  date: Yup.date()
    .required("Start date is required")
    .min(getYesterday(), "Start date cannot be in the past"),
  startTime: Yup.string()
    .required("Start time is required")
    .test("is-greater", "Start time should be in the future", function (value) {
      const { date } = this.parent;
      const formattedDate = moment(date).format("YYYY-MM-DD");
      const dateBasedOnStartTime = new Date(value);
      const formattedStartTimeHour =
        moment(dateBasedOnStartTime).format("HH:mm");
      const chosenDate = getNewDateWithParams(
        formattedDate,
        formattedStartTimeHour
      );
      const now = new Date();

      return now < chosenDate;
    }),
  endTime: Yup.string()
    .required("End time is required")
    .test("is-greater", "End time should be in the future", function (value) {
      const { date } = this.parent;
      const formattedDate = moment(date).format("YYYY-MM-DD");
      const dateBasedOnEndTime = new Date(value);
      const formattedEndTimeHour = moment(dateBasedOnEndTime).format("HH:mm");
      const chosenDate = getNewDateWithParams(
        formattedDate,
        formattedEndTimeHour
      );
      const now = new Date();

      return now < chosenDate;
    })
    .test(
      "is-greater",
      "End time should be greater than start time",
      function (value) {
        const { startTime } = this.parent;
        const startTimeDate = new Date(startTime);
        const endTimeDate = new Date(value);

        return startTimeDate < endTimeDate;
      }
    ),
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
  return condition ? GRID_MIN_WIDTH_XS : GRID_FULL_WIDTH_XS;
};

export const sortEventsAscending = (events, sortCondition) => {
  let sortedEvents = [...events];

  return sortedEvents.sort((a, b) => {
    const keyA = a[sortCondition].toLowerCase();
    const keyB = b[sortCondition].toLowerCase();
    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return 1;
    }
    if (a[sortCondition] === b[sortCondition]) {
      const startTimeAndDateA = new Date(
        `${moment(a.date).format("YYYY-MM-DD")}T${moment(a.startTime).format(
          "HH:mm"
        )}`
      );
      const startTimeAndDateB = new Date(
        `${moment(b.date).format("YYYY-MM-DD")}T${moment(b.startTime).format(
          "HH:mm"
        )}`
      );

      if (startTimeAndDateA.getTime() < startTimeAndDateB.getTime()) {
        return -1;
      }

      if (startTimeAndDateA.getTime() > startTimeAndDateB.getTime()) {
        return 1;
      }
    }

    return 0;
  });
};

export const sortEventsDescending = (events, sortCondition) => {
  let sortedEvents = [...events];

  return sortedEvents.sort((a, b) => {
    const keyA = a[sortCondition].toLowerCase();
    const keyB = b[sortCondition].toLowerCase();
    if (keyA > keyB) {
      return -1;
    }
    if (keyA < keyB) {
      return 1;
    }

    if (a[sortCondition] === b[sortCondition]) {
      const startTimeAndDateA = new Date(
        `${moment(a.date).format("YYYY-MM-DD")}T${moment(a.startTime).format(
          "HH:mm"
        )}`
      );
      const startTimeAndDateB = new Date(
        `${moment(b.date).format("YYYY-MM-DD")}T${moment(b.startTime).format(
          "HH:mm"
        )}`
      );

      if (startTimeAndDateA.getTime() > startTimeAndDateB.getTime()) {
        return -1;
      }

      if (startTimeAndDateA.getTime() < startTimeAndDateB.getTime()) {
        return 1;
      }
    }

    return 0;
  });
};

export const formatDate = (date) => {
  return moment(date).format("DD-MMM-YYYY");
};

export const formatHour = (hour) => {
  return moment(hour).format("HH:mm");
};
