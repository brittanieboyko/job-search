import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Application Completed" />
      </Form.Group>
    </Card>
  );
};

export default DetailsContainer;
