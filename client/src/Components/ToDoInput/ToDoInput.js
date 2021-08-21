import React from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const ToDoInput = ({ handleChange, handleSubmit, keyPress, value }) => {
  return (
    <Container>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Links, notes, etc"
          value={value}
          onChange={handleChange}
          onKeyPress={keyPress}
        />
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </InputGroup>
    </Container>
  );
};

export default ToDoInput;
