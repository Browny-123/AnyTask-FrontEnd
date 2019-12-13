import React, { useState } from "react";
import SearchInfo from "./SearchInfo";
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
        <SearchInfo clbk={handleCityInput} />
      ) : (
        <div>
          <div>
            <JobInfo jobInfo={jobs[0]} />
            <JobOwner jobOwner={jobs[0].ownerId} />
            <GoogleMaps address={jobs[0].location} />
          </div>
          <div>
            <button onClick={handleNoClick}>No</button>
            <p>Would you like this Job?</p>
            <button onClick={handleYesClick}>Yes</button>
          </div>
        </div>
      )}
    </div>
  );
}
