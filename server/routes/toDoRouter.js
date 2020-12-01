const express = require("express");

const ToDoCtrl = require("../controllers/ToDoController");

const router = express.Router();

router.post("/todo", ToDoCtrl.createToDo);
router.put("/todo/:id", ToDoCtrl.updateToDo);
router.delete("/todo/:id", ToDoCtrl.deleteToDo);
router.get("/todos", ToDoCtrl.getToDos);
router.get("/todo/:id", ToDoCtrl.getToDoById);

module.exports = router;