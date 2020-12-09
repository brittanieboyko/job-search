import React from "react";
import { Button, Pane, Heading } from "evergreen-ui";

const ToDoCard = ({ todo }) => {
  return (
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
      <Button onClick={todo.onClick}>Delete todo</Button>
    </Pane>
  );
};

export default ToDoCard;
