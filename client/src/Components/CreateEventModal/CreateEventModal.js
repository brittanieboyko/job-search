import React, { useState } from "react";
import { Button, PlusIcon, Dialog, Pane } from "evergreen-ui";
import CreateEventForm from "../CreateEventForm/CreateEventForm";

const AddModal = ( {handleChange, handleSubmit} ) => {
  const [show, setShow] = useState(false);
  const [valueObject, setValueObject] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onSubmit = (event) => {
      event.preventDefault();
      handleSubmit();
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
          <CreateEventForm handleChange={handleChange} handleSubmit={onSubmit} />
        </Dialog>
      </Pane>
    </>
  );
};

export default AddModal;
