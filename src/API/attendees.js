import axios from "axios";

export const fetchAttendees = async () => {
  return axios
    .get(
      "https://attendees-da288-default-rtdb.europe-west1.firebasedatabase.app/attendees.json"
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
