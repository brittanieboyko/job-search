import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoCard from "../ToDoCard/ToDoCard";
import api from "../../api";

const ToDoContainer = ({ job }) => {
  const [todos, setTodos] = useState([]);
  const [valueObject, setValueObject] = useState({
    todo: "",
  });

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
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .then(() => loadToDos())
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setValueObject({ ...valueObject, todo: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .insertToDo({
        title: valueObject.todo,
        jobID: job._id,
      })
      .then(() => loadToDos())
      .then(() => setValueObject({ todo: "" }))
      .catch((err) => console.log(err));
  };

  const keyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      handleSubmit(event);
    }
  };

  return (
    <Container>
      <ToDoInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        keyPress={keyPress}
        value={valueObject.todo}
      />
      <main>
        {todos.length ? (
          <>
            {todos.map((todo) =>
              todo.jobID === job._id ? (
                <ToDoCard
                  key={todo._id}
                  todo={todo}
                  onClick={() => deleteToDo(todo._id)}
                />
              ) : (
                <p key={todo._id}></p>
              )
            )}
          </>
        ) : (
          <p></p>
        )}
      </main>
    </Container>
  );
};

export default ToDoContainer;
