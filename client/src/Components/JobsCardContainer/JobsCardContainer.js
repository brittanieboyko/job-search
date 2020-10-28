import React, { useState, useEffect } from "react";
import JobsCard from "../JobsCard/JobsCard";
import api from "../../api";
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
        console.log(res.data.data);
        setJobs(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card-container">
      {jobs.length ? <JobsCard /> : <p> no jobs to display</p>}
    </div>
  );
};

export default JobsCardContainer;
