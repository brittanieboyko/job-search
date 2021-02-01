import React from "react";
import { Button, TextInput, Pane, FormField } from "evergreen-ui";

const JobForm = (props) => {
  return (
    <Pane>
      <FormField label="Company">
        <TextInput
          type="text"
          required
          placeholder="Company Name"
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
      <FormField label="Due Date">
        <TextInput
          type="date"
          required
          name="dueDate"
          onChange={props.handleChange}
        />
      </FormField>
      <FormField label="Salary Estimation">
        <TextInput
          type="number"
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
