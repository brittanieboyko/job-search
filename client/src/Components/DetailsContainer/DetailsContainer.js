import React from "react";
import Container from "react-bootstrap/esm/Container";
import DetailsHeader from "../DetailsHeader/DetailsHeader";
import ToDoContainer from "../ToDoContainer/ToDoContainer";

const DetailsContainer = ({ job }) => {
  return (
    <Container>
      <DetailsHeader job={job} />
      <ToDoContainer job={job} />
    </Container>
  );
};

export default DetailsContainer;
