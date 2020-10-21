import React from "react";
import JobsCard from "../JobsCard/JobsCard";
import './JobsCardContainer.css';

export default function JobsCardContainer() {
  return (
    <div className="card-container">
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
    </div>
  );
}
