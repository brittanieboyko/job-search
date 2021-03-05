import React from "react";
import { Button, Pane, Text, Heading } from "evergreen-ui";
import { Link } from "react-router-dom";
import "./JobsCard.css";

const JobsCard = ({ job, onClick }) => {
  return (
    <Pane
      elevation={1}
      float="center"
      width={550}
      height={120}
      margin={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      background="tint2"
    >
      <Heading>{job.title}, {job.companyName}</Heading>
      <Text>Complete by: {job.dateApplied} </Text>
      <Button>
        <Link
          to={{
            pathname: "/details",
            state: { job: job },
          }}
        >
          See details
        </Link>
      </Button>{" "}
      <Button onClick={onClick}>Delete job</Button>
    </Pane>
  );
};

export default JobsCard;
