import React from "react";
import { Button, Pane, Text, Heading } from "evergreen-ui";
import { Link } from "react-router-dom";
import "./JobsCard.css";

const JobsCard = ({ job }) => {
  return (
    <Pane
      elevation={1}
      float="left"
      width={200}
      height={120}
      margin={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      background="tint2"
    >
      <Heading>{job.title}</Heading>
      <Text>Applied on: {job.dateApplied} </Text>
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
      <Button onClick={job.onClick}>Delete job</Button>
    </Pane>
  );
};

export default JobsCard;
