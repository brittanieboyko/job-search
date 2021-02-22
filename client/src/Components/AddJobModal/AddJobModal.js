import React, { useState } from "react";
import { Button, PlusIcon, Dialog, Pane, AddIcon } from "evergreen-ui";
import AddJobForm from "../AddJobForm/AddJobForm";
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
        dueDate: valueObject.dueDate,
        salary: valueObject.salary,
      })
      .then(() => handleClose())
      .then(reload)
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Button
        height={24}
        marginLeft={16}
        appearance="minimal"
        iconBefore={AddIcon}
        onClick={handleShow}
      >
        Add A Job
      </Button>
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
