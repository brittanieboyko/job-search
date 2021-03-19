import React from "react";
import { Pane } from "evergreen-ui";
import "./Goals.css";

const Goals = () => {
  return (
    <Pane className="row">
      <Pane className="column">Today</Pane>
      <Pane className="column">This Month</Pane>
      <Pane className="column">This Year</Pane>
    </Pane>
    );
};

export default Goals;
