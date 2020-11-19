import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";

const DetailsContainer = ({ job }) => {
  return (
    <Card className="text-center">
      <Card.Header>{job.title}</Card.Header>
      <Card.Body>
        <Card.Text>Applied on: {job.dateApplied}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="light" onClick={() => console.log("hay!")}>
          Delete job
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DetailsContainer;
