import React from "react";
import { TextInput, FormField } from "evergreen-ui";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const JobForm = (props) => {
  return (
    <Container>
      <FormField label="Name of Company">
        <TextInput
          type="text"
          required
          placeholder="Name"
          name="companyName"
          onChange={props.handleChange}
        />
      </FormField>
      <FormField label="Job Title">
        <TextInput
          type="text"
          required
          placeholder="Title"
          name="title"
          onChange={props.handleChange}
        />
      </FormField>
      <FormField label="Date Applied">
        <TextInput
          type="date"
          required
          name="dateApplied"
          onChange={props.handleChange}
        />
      </FormField>
      <Button type="submit" onClick={props.handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default JobForm;
