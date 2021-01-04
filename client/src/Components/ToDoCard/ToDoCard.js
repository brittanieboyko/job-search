import React, { useState } from "react";
import { Button, Pane, Heading } from "evergreen-ui";
import Draggable from "react-draggable";

const ToDoCard = ({ todo, onClick }) => {
  const nodeRef = React.useRef(null);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [activeDrags, setActiveDrags] = useState(0);

  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
    console.log(x, ui.deltaX);
  };
  
  return (
    <Draggable onDrag={handleDrag} nodeRef={nodeRef}>
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
