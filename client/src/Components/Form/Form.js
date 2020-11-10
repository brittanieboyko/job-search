import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const JobForm = () => {
  return (
    <Form>
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Job Title:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Title" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Date Applied:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Date" />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default JobForm;
