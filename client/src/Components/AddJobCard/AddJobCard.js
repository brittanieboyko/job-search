import React from "react";
import "./AddJobCard.css";
import { Button, Pane } from "evergreen-ui";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon className="add-icon" icon={faPlus} />
        Add A Job
      </Button>
    </Pane>
  );
};

export default AddJobCard;
