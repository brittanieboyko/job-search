import React from "react";
import { Button, TextInput, Pane, FormField } from "evergreen-ui";

const CreateEventForm = (props) => {
  return (
    <Pane>
      <FormField label="Summary">
        <TextInput
          type="text"
          required
          placeholder="Event Summary"
          name="eventSummary"
          onChange={props.handleChange}
        />
      </FormField>
      <FormField label="Location">
        <TextInput
          type="text"
          required
          placeholder="Location of interview"
          name="location"
          onChange={props.handleChange}
        />
      </FormField>
      <FormField label="Start Time">
        <TextInput
          type="time"
          required
          name="startTime"
          onChange={props.handleChange}
        />
      </FormField>
      <Button type="submit" onClick={props.handleSubmit}>
        Submit
      </Button>
    </Pane>
  );
};

export default CreateEventForm;
