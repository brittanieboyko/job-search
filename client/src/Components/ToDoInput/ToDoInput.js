import React from "react";
import { TextInputField } from "evergreen-ui";

const ToDoInput = ({ handleChange, handleSubmit }) => {
  return (
    <TextInputField
    label="Enter a new todo item"
    description="This is a description."
    placeholder="Placeholder text"
    onChange={handleChange}
    onSubmit={handleSubmit}
    />
  );
};

export default ToDoInput;
