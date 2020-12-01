const ToDo = require("../models/todo-model");

const createToDo = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a title",
    });
  }
  const todo = new ToDo(body);

  if (!todo) {
    return res.status(400).json({ success: false, error: "other error" });
  }

  todo
    .save()
    .then((result) => {
      return res.status(201).json({
        success: true,
        id: todo._id,
        message: "ToDo item created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "ToDo not created!",
      });
    });
};

const updateToDo = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  ToDo.findOne({ _id: req.params.id }, (err, todo) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "ToDo not found!",
      });
    }
    todo.title = body.title;
    todo.updatedAt = body.updatedAt;
    todo
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: todo._id,
          message: "ToDo updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "ToDo not updated!",
        });
      });
  });
};

const deleteToDo = async (req, res) => {
  await ToDo.findOneAndDelete({ _id: req.params.id }, (err, todo) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!todo) {
      return res.status(404).json({ success: false, error: `Todo not found` });
    }

    return res.status(200).json({ success: true, data: todo });
  }).catch((err) => console.log(err));
};

const getToDoById = async (req, res) => {
  await ToDo.findOne({ _id: req.params.id }, (err, todo) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, data: todo });
  }).catch((err) => console.log(err));
};

const getToDos = async (req, res) => {
  await ToDo.find({}, (err, todos) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!todos.length) {
      return res.status(404).json({ success: false, error: `no todos found` });
    }
    return res.status(200).json({ success: true, data: todos });
  }).catch((err) => console.log(err));
};

module.exports = {
  createToDo,
  updateToDo,
  deleteToDo,
  getToDos,
  getToDoById,
};
