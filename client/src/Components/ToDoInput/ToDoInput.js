import React from "react";
import { Pane, TextInput, Button, FormField } from "evergreen-ui";

const ToDoInput = ({ handleChange, handleSubmit, keyPress }) => {



  return (
    <Pane>
      <FormField label="Add a to do item">
        <TextInput placeholder="Links, notes, etc" name="todo" onChange={handleChange} onKeyPress={keyPress}/>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </FormField>
    </Pane>
  );
};

export default ToDoInput;
