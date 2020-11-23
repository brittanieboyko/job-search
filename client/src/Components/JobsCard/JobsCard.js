import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from 'evergreen-ui';
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
        <Button>
          <Link
            to={{
              pathname: "/details",
              state: { job: props.job}
            }}
          >
            See details
          </Link>
        </Button>{" "}
        <Button onClick={props.onClick}>
          Delete job
        </Button>
      </Card.Body>
    </Card>
  );
};

export default JobsCard;
