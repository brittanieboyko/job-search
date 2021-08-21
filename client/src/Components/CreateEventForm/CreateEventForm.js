import React from "react";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const CreateEventForm = (props) => {
  return (
    <Container>
      <InputGroup label="Summary">
        <FormControl
          type="text"
          required
          placeholder="Event Summary"
          name="eventSummary"
          onChange={props.handleChange}
        />
      </InputGroup>
      <InputGroup label="Location">
        <FormControl
          type="text"
          required
          placeholder="Event Location"
          name="location"
          onChange={props.handleChange}
        />
      </InputGroup>
      <InputGroup label="Start Time">
        <FormControl
          type="datetime-local"
          required
          name="startTime"
          onChange={props.handleChange}
        />
      </InputGroup>
      <InputGroup label="End Time">
        <FormControl
          type="datetime-local"
          required
          name="endTime"
          onChange={props.handleChange}
        />
      </InputGroup>
      <Button type="submit" onClick={props.handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default CreateEventForm;
