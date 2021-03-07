import React, { useState } from "react";
import { Button, Dialog, Pane, AddIcon } from "evergreen-ui";
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
      <AddJobCard onClick={handleShow}/>
      <Pane>
        <Dialog
          isShown={show}
          title="Add A Job"
          onCloseComplete={() => setShow(false)}
          hasFooter={false}
        >
          <AddJobForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </Dialog>
      </Pane>
    </>
  );
};

export default AddModal;
