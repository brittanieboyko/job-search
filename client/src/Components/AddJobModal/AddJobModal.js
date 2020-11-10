import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddJobForm from "../AddJobForm/AddJobForm";

const AddModal = () => {
  const [show, setShow] = useState(false);
  const [valueObject, setValueObject] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValueObject({ ...valueObject, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(valueObject);
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add A Job!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddJobForm
            handleChange={handleChange}
            handleSubmit={handleSubmit} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddModal;
