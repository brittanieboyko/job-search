const express = require("express");

const JobCtrl = require("../controllers/JobController");
const ToDoCtrl = require("../controllers/ToDoController");

const router = express.Router();

// ==== Job CRUD ==== //

router.post("/job", JobCtrl.createJob);
router.put("/job/:id", JobCtrl.updateJob);
router.delete("/job/:id", JobCtrl.deleteJob);
router.get("/jobs", JobCtrl.getJobs);
router.get("/job/:id", JobCtrl.getJobById);

// ==== ToDo CRUD ==== //

router.post("/todo", ToDoCtrl.createToDo);
router.put("/todo/:id", ToDoCtrl.updateToDo);
router.delete("/todo/:id", ToDoCtrl.deleteToDo);
router.get("/todos", ToDoCtrl.getToDos);
router.get("/todo/:id", ToDoCtrl.getToDoById);

module.exports = router;