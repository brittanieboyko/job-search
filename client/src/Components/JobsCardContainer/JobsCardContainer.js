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
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card-container">
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
    </div>
  );
};

export default JobsCardContainer;
