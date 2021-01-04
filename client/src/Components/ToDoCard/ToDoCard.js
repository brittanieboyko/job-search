import React, { useState, useEffect } from "react";
import { Button, Pane, Heading } from "evergreen-ui";
import Draggable from "react-draggable";

const ToDoCard = ({ todo, onClick }) => {
  const nodeRef = React.useRef(null);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    localStorage.setItem("deltaPosition", JSON.stringify(deltaPosition));
  }, [deltaPosition]);

  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.lastX,
      y: y + ui.lastY,
    });
    console.log(deltaPosition);
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={deltaPosition}
      onStop={(e, data) => {
        handleDrag(e, data);
      }}
    >
      <Pane
        elevation={1}
        float="left"
        width={200}
        height={120}
        margin={24}
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
