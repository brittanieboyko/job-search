import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./JobsCard.css";

const JobsCard = (props) => {
  return (
    <Card className="text-center custom-card">
      <Card.Body>
        <Card.Title>{props.job.title}</Card.Title>
        <Button variant="light">
          <Link to="/details">See Details</Link>
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">{props.job.dateApplied}</Card.Footer>
    </Card>
  );
};

export default JobsCard;
