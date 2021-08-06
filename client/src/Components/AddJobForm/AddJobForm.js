import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const JobForm = (props) => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupApplication">
          <Form.Label>Name of Company</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Name of Company"
            name="companyName"
            onChange={props.handleChange}
          />
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Title"
            name="title"
            onChange={props.handleChange}
          />
          <Form.Label>Date Applied</Form.Label>
          <Form.Control
            type="date"
            required
            name="dateApplied"
            onChange={props.handleChange}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default JobForm;
