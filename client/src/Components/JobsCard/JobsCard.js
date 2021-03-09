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
      <Heading margin={12}>{job.title}, {job.companyName}</Heading>
      <Text marginRight={12}>{job.dateApplied} </Text>
      <Button marginRight={12}>
        <Link
          to={{
            pathname: "/details",
            state: { job: job },
          }}
        >
          See details
        </Link>
      </Button>
      <Button onClick={onClick}>Delete job</Button>
    </Pane>
  );
};

export default JobsCard;
