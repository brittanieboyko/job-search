const Job = require("../models/jobs-model");

module.exports = {
  addJob: (req, res) => {
    const body = req.body;
    if (!body) {
      return res
        .status(400)
        .json({ success: false, error: "No job provided" });
    }
    const job = new Job(body);
    if (!job) {
      return res.status(400).json({ success: false, error: "no job provided" });
    }

    job
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: job._id,
          message: "Job created!",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          err,
          message: "Failed to create job!",
        });
      });
  },
  updateJob: async (req, res) => {
    const body = req.body;
    if (!body) {
      return res
        .status(400)
        .json({ success: false, error: "You must provide a job to update" });
    }
    Job.findOne({ _id: req.params.id }, (err, job) => {
      if (err) {
        return res.status(404).json({
          err,
          message: "Job not found!",
        });
      }
      job.title = body.title;
      job.dateApplied = body.dateApplied;
      job.completed = body.completed;
      job
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: job._id,
            message: "Job updated!",
          });
        })
        .catch((error) => {
          return res.status(404).json({
            error,
            message: "Job not updated!",
          });
        });
    });
  },
  deleteJob: async (req, res) => {
    await Job.findOneAndDelete({ _id: req.params.id }, (err, job) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!job) {
        return res.status(404).json({ success: false, error: `Job not found` });
      }

      return res.status(200).json({ success: true, data: job });
    }).catch((err) => console.log(err));
  },

  findJobById: async (req, res) => {
    await Job.findOne({ _id: req.params.id }, (err, job) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!job) {
        return res
          .status(404)
          .json({ success: false, error: "Job not found!" });
      }
      return res.status(200).json({ success: true, data: job });
    }).catch((err) => console.log(err));
  },
  findAllJobs: async (req, res) => {
    await Job.find({}, (err, jobs) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!jobs.length) {
        return res
          .status(404)
          .json({ success: false, error: "Jobs not found" });
      }
      return res.status(200).json({ success: true, data: jobs });
    }).catch((err) => console.log(err));
  },
};
