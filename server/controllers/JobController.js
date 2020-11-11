const Job = require("../models/jobs-model");

const createJob = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a job name",
    });
  }
  const job = new Job(body);

  if (!job) {
    return res.status(400).json({ success: false, error: "other error" });
  }

  job
    .save()
    .then((result) => {
      return res.status(201).json({
        success: true,
        id: job._id,
        message: "Job created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Job not created!",
      });
    });
};

const updateJob = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
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
};

const deleteJob = async (req, res) => {
  await Job.findOneAndDelete({ _id: req.params.id }, (err, job) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!job) {
      return res.status(404).json({ success: false, error: `Job not found` });
    }

    return res.status(200).json({ success: true, data: job });
  }).catch((err) => console.log(err));
};

const getJobById = async (req, res) => {
  await Job.findOne({ _id: req.params.id }, (err, job) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, data: job });
  }).catch((err) => console.log(err));
};

const getJobs = async (req, res) => {
  await Job.find({}, (err, jobs) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!jobs.length) {
      return res.status(404).json({ success: false, error: `no jobs found` });
    }
    return res.status(200).json({ success: true, data: jobs });
  }).catch((err) => console.log(err));
};

module.exports = {
  createJob,
  updateJob,
  deleteJob,
  getJobs,
  getJobById,
};
