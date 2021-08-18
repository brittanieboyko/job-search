import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./JobsCard.css";

const JobsCard = ({ job, onClick }) => {
  return (
    <Container>
      <Card>
        <Card.Title>
          {job.title}, {job.companyName}
        </Card.Title>
        <Card.Subtitle>{job.dateApplied} </Card.Subtitle>
        <Button variant="light">
          <Link
            className="details"
            to={{
              pathname: "/details",
              state: { job: job },
            }}
          >
            See details
          </Link>
        </Button>
        <Button variant="light" onClick={onClick}>
          Delete job
        </Button>
      </Card>
    </Container>
  );
};

export default JobsCard;
