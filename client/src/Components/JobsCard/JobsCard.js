import React from "react";
import { Button, Pane, Text, Heading } from "evergreen-ui";
import { Link } from "react-router-dom";
import "./JobsCard.css";

const JobsCard = ({ job, onClick }) => {
  return (
    <Pane
      elevation={1}
      float="left"
      width={500}
      height={120}
      margin={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      background="tint2"
    >
      <Heading>{job.title}, {job.companyName}</Heading>
      <Text>Complete by: {job.dueDate} </Text>
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
