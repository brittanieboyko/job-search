import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
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
      <Container ref={nodeRef}>
        <h3>{todo.title}</h3>
        <Button onClick={onClick}>Delete todo</Button>
      </Container>
    </Draggable>
  );
};

export default ToDoCard;
