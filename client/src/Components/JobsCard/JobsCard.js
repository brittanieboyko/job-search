import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./JobsCard.css";

const JobsCard = (props) => {
  return (
    <Card className="text-center">
      <Card.Header>{props.job.title}</Card.Header>
      <Card.Body>
        <Card.Text>Applied on: {props.job.dateApplied}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="light">
          <Link to="/details">See details</Link>
        </Button>{" "}
        <Button variant="light">Delete job</Button>
      </Card.Body>
    </Card>
  );
};

export default JobsCard;
