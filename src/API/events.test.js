import axios from "axios";
import { fetchEvents, fetchEventToBeEdited, editEvent } from "./events";

jest.mock("axios");

describe("fetchEvents()", () => {
  describe("when API call is successful", () => {
    it("should return a list of events", async () => {
      const eventsList = {
        id: {
          attendees: [
            {
              email: "test email",
              id: "123",
              name: "name",
            },
          ],
          date: "date",
          description: "description",
          endTime: "end time",
          location: "location",
          startTime: "start time",
          title: "title",
        },
      };

      axios.get.mockResolvedValueOnce({ data: eventsList });
      const result = await fetchEvents();

      expect(result).toEqual(eventsList);
    });
  });

  describe("when API call fails", () => {
    it("should return an error", async () => {
      const err = new Error("test error");

      axios.get.mockRejectedValueOnce(err);
      const result = await fetchEvents();

      expect(result).toEqual(err);
    });
  });
});

describe("fetchEventToBeEdited()", () => {
  it("should return an event", async () => {
    const id = 1;
    const testEvent = {
      attendees: [
        {
          email: "test email",
          id: "123",
          name: "name",
        },
      ],
      date: "date",
      description: "description",
      endTime: "end time",
      location: "location",
      startTime: "start time",
      title: "title",
    };

    axios.get.mockResolvedValueOnce({ data: testEvent });
    const result = await fetchEventToBeEdited(id);

    // expect(fetchEventToBeEdited).toHaveBeenCalledWith(id);
    expect(result).toEqual(testEvent);
  });
});
