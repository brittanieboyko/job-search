import React, { useState, useEffect } from "react";
import { Pane } from "evergreen-ui";
import ToDoInput from "../ToDoInput/ToDoInput";
import api from "../../api";

const ToDoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadToDos();
  }, []);

  const loadToDos = () => {
    api
      .getAllToDos()
      .then((res) => {
        setTodos(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteToDo = (id) => {
    api
      .deleteToDoById(id)
      .then(() => loadToDos())
      .catch((err) => console.log(err));
  };
  return (
    <Pane>
      <ToDoInput />
    </Pane>
    );
};

export default ToDoContainer;
