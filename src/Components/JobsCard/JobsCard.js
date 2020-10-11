import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./JobsCard.css";

export default function JobsCard() {
  return (
    <Card className="text-center custom-card">
      <Card.Body>
        <Card.Title>Job and Company Applied</Card.Title>
        <Button variant="light">
          <Link to="/details">See Details</Link>
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">Updated 2 days ago</Card.Footer>
    </Card>
  );
}
