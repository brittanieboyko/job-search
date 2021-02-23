import React, { useState } from "react";
import CreateEventModal from "../../Components/CreateEventModal/CreateEventModal";
import { Pane } from "evergreen-ui";

const Calendar = () => {
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPES = "https://www.googleapis.com/auth/calendar";
  const gapi = window.gapi;
  const [valueObject, setValueObject] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValueObject({ ...valueObject, [name]: value });
  };

  const handleSubmit = () => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: process.env.REACT_APP_API_KEY,
        clientId: process.env.REACT_APP_CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
      gapi.client.load("calendar", "v3", () => {});

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          let startTimeAsDate = new Date(valueObject.startTime);
          let endTimeAsDate = new Date(valueObject.endTime);
          let usersTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

          const event = {
            summary: `${valueObject.eventSummary}`,
            location: `${valueObject.location}`,
            start: {
              dateTime: `${startTimeAsDate.toISOString()}`,
              timeZone: usersTimeZone,
            },
            end: {
              dateTime: `${endTimeAsDate.toISOString()}`,
              timeZone: usersTimeZone,
            },
          };

          const request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });
          request.execute((event) => {
            window.open(event.htmlLink);
          });
        });
    });
  };

  return (
    <Pane>
      <CreateEventModal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Pane>
  );
};

export default Calendar;
