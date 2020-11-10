import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddJobForm from "../AddJobForm/AddJobForm";

const AddModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <AddJobForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Save Job</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
