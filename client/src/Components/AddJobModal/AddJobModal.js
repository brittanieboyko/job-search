import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddJobForm from "../AddJobForm/AddJobForm";
import AddJobCard from "../AddJobCard/AddJobCard";
import api from "../../api";

const AddModal = ({ reload }) => {
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
    api
      .insertJob({
        companyName: valueObject.companyName,
        title: valueObject.title,
        dateApplied: valueObject.dateApplied,
      })
      .then(() => handleClose())
      .then(reload)
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AddJobCard onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Job</Modal.Title>
        </Modal.Header>
        <AddJobForm handleChange={handleChange} handleSubmit={handleSubmit} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
