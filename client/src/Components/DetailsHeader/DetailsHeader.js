import React from "react";
import { Heading } from "evergreen-ui";

const DetailsHeader = ({ job }) => {
  return <Heading size={900}>{job.title}</Heading>;
};

export default DetailsHeader;
