import React, { useState } from "react";
import CreateEventForm from "../CreateEventForm/CreateEventForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddModal = ({ handleChange, handleSubmit }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
    handleClose();
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <FontAwesomeIcon className="add-icon" icon={faPlus} />
        Add an event to your calendar!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add An Event</Modal.Title>
        </Modal.Header>
        <CreateEventForm handleChange={handleChange} handleSubmit={onSubmit} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
