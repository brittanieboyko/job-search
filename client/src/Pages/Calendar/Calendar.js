import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import CreateEventModal from "../../Components/CreateEventModal/CreateEventModal";
import { Pane, Heading } from "evergreen-ui";

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
    console.log(valueObject.startTime, valueObject.endTime);
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: process.env.REACT_APP_API_KEY,
        clientId: process.env.REACT_APP_CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
      gapi.client.load("calendar", "v3", () => {
        console.log("bam!");
      });

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const event = {
            'summary': `${valueObject.eventSummary}`,
            'location': `${valueObject.location}`,
            'start': {
              'dateTime': '2015-05-28T09:00:00-07:00'
            },
            'end': {
              'dateTime': '2021-02-16T17:00:00-07:00'
            }
          };
          console.log(JSON.stringify(event))

          const request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });
          request.execute(event => {
            window.open(event.htmlLink);
          });
        })
        .then(() => console.log("done?"))
    });
  };

  return (
    <Pane>
      <Heading size={900}>Calendar Page</Heading>
      <NavBar />
      <CreateEventModal handleChange={handleChange} handleSubmit={handleSubmit} />
    </Pane>
  );
};

export default Calendar;
