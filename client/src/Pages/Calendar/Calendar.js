import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Pane, Heading, Button } from 'evergreen-ui';

const Calendar = () => {
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
  const gapi = window.gapi;

  const handleClick = () => {
    gapi.load("client:auth2", () => {
    gapi.client.init({
      apiKey: process.env.REACT_APP_API_KEY,
      clientId: process.env.REACT_APP_CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    })
    gapi.client.load("calendar", "v3", () => {console.log("bam!")})

    gapi.auth2.getAuthInstance().signIn()
  })
  }


  return (
    <Pane>
      <Heading size={900}>Calendar Page</Heading>
      <NavBar />
      <Button onClick={handleClick}>Add Event</Button>
    </Pane>
  );
}

export default Calendar;