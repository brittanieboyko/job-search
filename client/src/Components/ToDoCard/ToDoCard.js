import React, { useState, useEffect } from "react";
import { Button, Pane, Heading } from "evergreen-ui";
import Draggable from "react-draggable";

const ToDoCard = ({ todo, onClick }) => {
  const nodeRef = React.useRef(null);
  const [storedPosition, setStoredPosition] = useState(
    JSON.parse(
      localStorage.getItem(`${todo._id}`) || JSON.stringify({ x: 0, y: 0 })
    )
  );

  useEffect(() => {
    setStoredPosition(storedPosition);
  }, [storedPosition]);

  useEffect(() => {
    localStorage.setItem(`${todo._id}`, JSON.stringify(storedPosition));
  }, [storedPosition, todo._id]);

  const handleStop = (e, ui) => {
    setStoredPosition({
      x: ui.lastX,
      y: ui.lastY,
    });
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={storedPosition}
      onStop={(e, data) => {
        handleStop(e, data);
      }}
    >
      <Pane
        elevation={1}
        float="left"
        width={200}
        height={120}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        background="tint2"
        ref={nodeRef}
      >
        <Heading>{todo.title}</Heading>
        <Button onClick={onClick}>Delete todo</Button>
      </Pane>
    </Draggable>
  );
};

export default ToDoCard;
