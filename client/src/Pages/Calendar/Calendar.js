import React, { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import CreateEventModal from "../../Components/CreateEventModal/CreateEventModal";
import Container from "react-bootstrap/Container";

require("react-big-calendar/lib/css/react-big-calendar.css");

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPES = "https://www.googleapis.com/auth/calendar";
  const gapi = window.gapi;
  const [valueObject, setValueObject] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const calendarId = "bib88vd60u8glvl7r69lgenig4@group.calendar.google.com";

  useEffect(() => {
    handleClientLoad();
  });

  const handleClientLoad = () => {
    gapi.load("client:auth2", initClient);
  };

  const initClient = () => {
    gapi.client
      .init({
        apiKey: process.env.REACT_APP_API_KEY,
        clientId: process.env.REACT_APP_CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function () {
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        },
        function (error) {
          console.log(JSON.stringify(error, null, 2));
        }
      );
  };

  const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      listUpcomingEvents();
    } else {
      console.log("user not signed in");
    }
  };

  function listUpcomingEvents() {
    gapi.client.calendar.events
      .list({
        calendarId: calendarId,
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      })
      .then((response) => {
        const events = response.result.items;

        if (events.length > 0) {
          events.forEach((event) => {
            const formattedEvent = {
              start: event.start.date || event.start.dateTime,
              end: event.end.date || event.end.dateTime,
              title: event.summary,
            };
            setCalendarEvents((calendarEvents) => [
              ...calendarEvents,
              formattedEvent,
            ]);
          });
        } else {
          console.log("No upcoming events found.");
        }
      });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValueObject({ ...valueObject, [name]: value });
  };

  const handleSubmit = () => {
    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
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
        calendarId: calendarId,
        resource: event,
      });
      request.execute((event) => {
        window.open(event.htmlLink);
      });
    }
  };
  const handleAlert = ({ title }) => {
    console.log(title);
  };

  return (
    <Container>
      <CreateEventModal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["month", "day", "agenda"]}
        popup={true}
        style={{ height: 600, width: 800 }}
        onSelectEvent={handleAlert}
      />
    </Container>
  );
};

export default MyCalendar;
