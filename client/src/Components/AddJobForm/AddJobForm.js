import React from "react";
import { Button, TextInput, Pane, FormField } from "evergreen-ui";

const JobForm = (props) => {
  return (
    <Pane>
      <FormField label="Company">
        <TextInput
          type="text"
          placeholder="Company Name"
          name="company"
          onChange={props.handleChange}
        />
      </FormField>
      <FormField label="Job Title">
        <TextInput
          type="text"
          placeholder="Title"
          name="title"
          onChange={props.handleChange}
        />
      </FormField>
      <FormField label="Due Date">
        <TextInput
          type="text"
          placeholder="Date"
          name="date"
          onChange={props.handleChange}
        />
      </FormField>
      <FormField label="Salary Estimation">
        <TextInput
          type="text"
          placeholder="Salary"
          name="salary"
          onChange={props.handleChange}
        />
      </FormField>
      <Button type="submit" onClick={props.handleSubmit}>
        Submit
      </Button>
    </Pane>
  );
};

export default JobForm;
