import React from "react";
import { Button, Pane, Heading } from "evergreen-ui";
import Draggable from 'react-draggable';

const ToDoCard = ({ todo, onClick, updatePosition }) => {
  return (
    <Draggable>
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
      >
        <Heading>{todo.title}</Heading>
        <Button onClick={onClick}>Delete todo</Button>
      </Pane>
     </Draggable>
  );
};

export default ToDoCard;
