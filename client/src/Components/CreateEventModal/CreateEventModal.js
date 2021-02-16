import React, { useState } from "react";
import { Button, PlusIcon, Dialog, Pane } from "evergreen-ui";
import CreateEventForm from "../CreateEventForm/CreateEventForm";

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
    console.log("form submitted");
    handleClose();
  };

  return (
    <>
      <Button appearance="minimal" variant="primary" onClick={handleShow}>
        <PlusIcon marginRight={10} />
        Add an event to your calendar!
      </Button>
      <Pane>
        <Dialog
          isShown={show}
          title="Create Event"
          onCloseComplete={() => setShow(false)}
          hasFooter={false}
        >
          <CreateEventForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </Dialog>
      </Pane>
    </>
  );
};

export default AddModal;
