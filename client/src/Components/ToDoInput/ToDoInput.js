import React from "react";
import { TextInputField } from "evergreen-ui";

const ToDoInput = () => {
  return (
    <TextInputField
    label="Enter a new todo item"
    description="This is a description."
    placeholder="Placeholder text"
    />
  );
};

export default ToDoInput;
