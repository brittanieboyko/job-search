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
      <Heading size={900}>{job.title}</Heading>
    </Pane>
  );
};

export default DetailsHeader;
