import axios from "axios";

export const fetchEvents = async () => {
  return axios
    .get(
      "https://react-events-app-7e674-default-rtdb.europe-west1.firebasedatabase.app/events.json"
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const fetchEventToBeEdited = async (eventId) => {
  return axios
    .get(
      `https://react-events-app-7e674-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}.json`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const editEvent = async (eventId, body) => {
  return axios
    .put(
      `https://react-events-app-7e674-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}.json`,
      body
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const addEvent = async (body) => {
  return axios
    .post(
      "https://react-events-app-7e674-default-rtdb.europe-west1.firebasedatabase.app/events.json",
      body
    )
    .catch((error) => {
      return error;
    });
};

export const deleteEvent = async (eventId) => {
  return axios
    .delete(
      `https://react-events-app-7e674-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}.json`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
