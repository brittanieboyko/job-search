import React from "react";
import { Pane, Heading, Text } from "evergreen-ui";

const DetailsHeader = ({ job }) => {
  return (
    <Pane
      height={120}
      width={240}
      alignItems="center"
      justifyContent="center"
      border="default"
    >
      <Heading>{job.title}</Heading>
      <Text>Applied on: {job.dateApplied}</Text>
    </Pane>
  );
};

export default DetailsHeader;
