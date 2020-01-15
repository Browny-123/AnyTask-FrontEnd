import React from "react";

export default function JobInfo({ jobInfo }) {
  return (
    <div className="job-divider">
      <h2>{jobInfo.jobDetails}</h2>
      <p>
        <span>Completion Time: </span> {jobInfo.timeNeeded} Minutes{" "}
      </p>
      <p>
        <span>Completion Amount: </span> £{jobInfo.reward}
      </p>
      <p>
        <span>Start Date: </span> {jobInfo.date}
      </p>
      <p>
        <span>Required Skills: </span> {jobInfo.speciality}
      </p>
      <h2>Job Location</h2>
      <ul className="job-location">
        <li>
          <span>Street: </span>
          {jobInfo.location.street}
        </li>
        <li>
          <span>City: </span>
          {jobInfo.location.city}
        </li>
        <li>
          <span>Country: </span>
          {jobInfo.location.country}
        </li>
      </ul>
    </div>
  );
}
