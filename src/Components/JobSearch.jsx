import React, { useState } from "react";
import JobSearchInformation from "./JobSearchInformation";
import JobInfo from "./JobInfo";
import JobOwner from "./JobOwner";
import GoogleMaps from "./GoogleMaps";
import ApiHandler from "../Apihandler/ApiHandler";
const api = new ApiHandler();

export default function JobSearch() {
  const [jobs, setJobs] = useState([]);

  const handleCityInput = jobQuery => {
    setJobs(jobQuery);
  };

  const handleNoClick = () => {
    var updatedJobList = [...jobs];
    updatedJobList.splice(0, 1);
    setJobs(updatedJobList);
  };

  const handleYesClick = () => {
    try {
      api.post("acceptedTask", { jobId: jobs[0]._id });
      var updatedJobList = [...jobs];
      updatedJobList.splice(0, 1);
      setJobs(updatedJobList);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {jobs.length === 0 ? (
        <JobSearchInformation clbk={handleCityInput} />
      ) : (
        <div className="job-info-container">
          <div className="main-job-info">
            <JobInfo jobInfo={jobs[0]} />
            <JobOwner jobOwner={jobs[0].ownerId} />
            <GoogleMaps address={jobs[0].location} />
          </div>
          <div className="button-options">
            <button onClick={handleNoClick} className="choice-buttons">
              No
            </button>
            <p className="choice">Would you like this Job?</p>
            <button onClick={handleYesClick} className="choice-buttons">
              Yes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
