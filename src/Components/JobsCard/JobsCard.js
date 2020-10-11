import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './JobsCard.css';

export default function JobsCard() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Job and Company Applied to</Card.Title>
        <Button variant="light">See Details</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Updated 2 days ago</Card.Footer>
    </Card>
  );
}
