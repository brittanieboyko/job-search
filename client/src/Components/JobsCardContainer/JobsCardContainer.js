import React, { useState, useEffect } from "react";
import JobsCard from "../JobsCard/JobsCard";
import AddJobModal from "../AddJobModal/AddJobModal";
import api from "../../api";
import { Pane } from "evergreen-ui";
import "./JobsCardContainer.css";

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
      .then(() => setJobs(jobs.filter((job) => job._id !== id)))
      .then(() => loadJobs())
      .catch((err) => console.log(err));
  };

  return (
    <Pane marginLeft={50}>
      <AddJobModal reload={loadJobs} />
      <main>
        {jobs.length ? (
          <>
            {jobs.map((job) => (
              <JobsCard
                key={job._id}
                job={job}
                onClick={() => deleteJob(job._id)}
              />
            ))}
          </>
        ) : (
          <p></p>
        )}
      </main>
    </Pane>
  );
};

export default JobsCardContainer;
