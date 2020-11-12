import React, { useState, useEffect } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import JobsCard from "../JobsCard/JobsCard";
import api from "../../api";
import "./JobsCardContainer.css";
import AddJobModal from '../AddJobModal/AddJobModal';

const JobsCardContainer = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = () => {
    api
      .getAllJobs()
      .then((res) => {
        setJobs(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteJob = (id) => {
    api
      .deleteJobById(id)
      .then(() => loadJobs())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AddJobModal reload={loadJobs}/>
      <CardColumns>
        {jobs.length ? (
          <>
            {jobs.map((job) => (
              <JobsCard key={job._id} job={job} onClick={() => deleteJob(job._id)} />
            ))}
          </>
        ) : (
          <p>No jobs added yet</p>
        )}
      </CardColumns>
    </>
  );
};

export default JobsCardContainer;
