import React from "react";
import Card from "react-bootstrap/Card";

const DetailsHeader = ({ job }) => {
  return (
    <Card className="text-center">
      <Card.Header>{job.title}</Card.Header>
      <Card.Body>
        <Card.Text>Applied on: {job.dateApplied}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DetailsHeader;
