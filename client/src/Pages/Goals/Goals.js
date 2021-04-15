import React from "react";
import { Pane } from "evergreen-ui";
import "./Goals.css";

const Goals = () => {
  return (
    <Pane className="row">
      <Pane className="column">
        <h3>Daily</h3>
      </Pane>
      <Pane className="column">
        <h3>Monthly</h3>
      </Pane>
      <Pane className="column">
        <h3>Yearly</h3>
      </Pane>
    </Pane>
  );
};

export default Goals;
