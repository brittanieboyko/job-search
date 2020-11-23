import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const DetailsHeader = ({ job }) => {
  return (
    <Card className="text-center">
      <Card.Header>{job.title}</Card.Header>
      <Card.Body>
        <Card.Text>Applied on: {job.dateApplied}</Card.Text>
      </Card.Body>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Application Completed" value="Application Completed" />
      </Form.Group>
    </Card>
  );
};

export default DetailsHeader;
