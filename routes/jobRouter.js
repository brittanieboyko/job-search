const express = require("express");

const JobCtrl = require("../controllers/JobController");

const router = express.Router();

router.post("/job", JobCtrl.createJob);
router.put("/job/:id", JobCtrl.updateJob);
router.delete("/job/:id", JobCtrl.deleteJob);
router.get("/jobs", JobCtrl.getJobs);
router.get("/job/:id", JobCtrl.getJobById);

module.exports = router;