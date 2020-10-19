const express = require("express");

const JobCtrl = require("../controllers/JobController");

const router = express.Router();

router.post("/job", JobCtrl.addJob);
router.put("/job/:id", JobCtrl.updateJob);
router.delete("/job/:id", JobCtrl.deleteJob);
router.get("/job/:id", JobCtrl.findJobById);
router.get("/jobs", JobCtrl.findAllJobs);

module.exports = router;
