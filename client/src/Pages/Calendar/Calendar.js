import React, { useEffect, useState } from "react";
import CreateEventModal from "../../Components/CreateEventModal/CreateEventModal";
import { Pane } from "evergreen-ui";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

require("react-big-calendar/lib/css/react-big-calendar.css");

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPES = "https://www.googleapis.com/auth/calendar";
  const gapi = window.gapi;
  const [valueObject, setValueObject] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    handleClientLoad();
  }, []);

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
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          // authorizeButton.onclick = handleAuthClick;
          // signoutButton.onclick = handleSignoutClick;
        },
        function (error) {
          console.log(JSON.stringify(error, null, 2));
        }
      );
  };

  const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      // authorizeButton.style.display = 'none';
      // signoutButton.style.display = 'block';
      listUpcomingEvents();
    } else {
      // authorizeButton.style.display = 'block';
      // signoutButton.style.display = 'none';
      console.log("not signed in");
    }
  };

  // function handleSignoutClick(event) {
  //   gapi.auth2.getAuthInstance().signOut();
  // }

  // function handleAuthClick(event) {
  //   gapi.auth2.getAuthInstance().signIn();
  // }

  function listUpcomingEvents() {
    gapi.client.calendar.events
      .list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      })
      .then(function (response) {
        var events = response.result.items;

        if (events.length > 0) {
          setEvents(events);
          console.log(events);
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
  };

  return (
    <Pane>
      <CreateEventModal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </Pane>
  );
};

export default MyCalendar;
