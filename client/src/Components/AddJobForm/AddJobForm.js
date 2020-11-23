import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const JobForm = (props) => {
  return (
    <Form>
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Job Title:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Title" name="title" onChange={props.handleChange}/>
        </Col> 
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Date Applied:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Date" name="date" onChange={props.handleChange} />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={props.handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default JobForm;
