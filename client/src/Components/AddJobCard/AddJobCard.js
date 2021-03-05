import React from "react";
import { Button, Text, Pane, AddIcon, Heading } from "evergreen-ui";

const AddJobCard = ({ reload }) => {
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
      <Heading>this is heading text</Heading>
      <Text>this is text text</Text>
      <Button
        height={24}
        marginLeft={16}
        appearance="minimal"
        iconBefore={AddIcon}
        onClick={console.log("clicky click")}
      >
        Add A Job
      </Button>
    </Pane>
  );
};

export default AddJobCard;
