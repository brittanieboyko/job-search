import React from "react";
import { Button, Text, Pane, AddIcon, Heading } from "evergreen-ui";

const AddJobCard = ({ onClick }) => {
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
      <Button
        height={24}
        marginLeft={16}
        appearance="minimal"
        iconBefore={AddIcon}
        onClick={onClick}
      >
        Add A Job
      </Button>
    </Pane>
  );
};

export default AddJobCard;
