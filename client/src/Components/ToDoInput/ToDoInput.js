import React from "react";
import { Pane, TextInputField, Button } from "evergreen-ui";

const ToDoInput = ({ handleChange, handleSubmit }) => {
  return (
      <Pane>
        <TextInputField
        label="Enter a new todo item"
        description="This is a description."
        placeholder="Placeholder text"
        onChange={handleChange}
        />
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Pane>
  );
};

export default ToDoInput;
