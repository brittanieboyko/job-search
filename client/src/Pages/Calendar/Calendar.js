import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Pane, Heading, Button } from 'evergreen-ui';

const Calendar = () => {

  const handleClick = () => {
    console.log("hi");
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