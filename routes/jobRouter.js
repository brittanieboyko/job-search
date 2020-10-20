const express = require("express");

const JobCtrl = require("../controllers/JobController");

const router = express.Router();

router.post("/job", JobCtrl.createJob);
router.put("/job/:id", JobCtrl.updateJob);
router.delete("/job/:id", JobCtrl.deleteJob);
router.get("/job/:id", JobCtrl.getJobs);
router.get("/jobs", JobCtrl.getJobById);

module.exports = router;