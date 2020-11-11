import React, { useState, useEffect } from "react";
import CardColumns from "react-bootstrap/CardColumns";
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
        setJobs(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CardColumns>
      {jobs.length ? (
        <>
          {jobs.map((job) => (
            <JobsCard key={job._id} job={job} />
          ))}
        </>
      ) : (
        <p>No jobs added yet</p>
      )}
    </CardColumns>
  );
};

export default JobsCardContainer;
