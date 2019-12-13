import React from "react";

export default function JobInfo({ jobInfo }) {
  return (
    <div>
      <h1>{jobInfo.jobDetails}</h1>
      <p>Estimated Time for Completion: {jobInfo.timeNeeded} Minutes </p>
      <p>Completion Amount: £{jobInfo.timeNeeded}</p>
      <p>Start Date: {jobInfo.date}</p>
      <p>Required Skills: {jobInfo.speciality}</p>
      <h2>Job Location</h2>
      <ul>
        <li>Street: {jobInfo.location.street} </li>
        <li>City: {jobInfo.location.city} </li>
        <li>Country: {jobInfo.location.country} </li>
      </ul>
    </div>
  );
}
