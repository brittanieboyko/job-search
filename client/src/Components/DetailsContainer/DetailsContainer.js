import React from "react";
import { Pane } from "evergreen-ui";
import DetailsHeader from "../DetailsHeader/DetailsHeader";
import ToDoContainer from "../ToDoContainer/ToDoContainer";

const DetailsContainer = ({ job }) => {
  return (
    <Pane>
      <DetailsHeader job={job} />
      <ToDoContainer job={job} />
    </Pane>
  );
};

export default DetailsContainer;
