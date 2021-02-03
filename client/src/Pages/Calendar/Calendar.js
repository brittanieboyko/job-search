import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Pane, Heading } from 'evergreen-ui';

const Calendar = () => {
  return (
    <Pane>
      <Heading size={900}>Calendar Page</Heading>
      <NavBar />
    </Pane>
  );
}

export default Calendar;