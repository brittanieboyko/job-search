import React from "react";
import { Button, Pane } from "evergreen-ui";

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
        onClick={onClick}
        fontSize={24}
        fontFamily={"'Space Grotesk', sans-serif"}
      >
        <i className="fas fa-plus fa-3x"></i>
        Add A Job
      </Button>
    </Pane>
  );
};

export default AddJobCard;
