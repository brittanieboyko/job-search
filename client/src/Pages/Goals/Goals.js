import React from "react";
import Container from "react-bootstrap/Container";
import "./Goals.css";

const Goals = () => {
  return (
    <Container className="row">
      <Container className="column">
        <h3>Daily</h3>
      </Container>
      <Container className="column">
        <h3>Monthly</h3>
      </Container>
      <Container className="column">
        <h3>Yearly</h3>
      </Container>
    </Container>
  );
};

export default Goals;
