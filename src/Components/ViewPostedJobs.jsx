import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiHandler from "../Apihandler/ApiHandler";
import "../Styles/ViewPostedJobs.css";

const Api = new ApiHandler();

export default function ViewPostedJobs(props) {
  const userId = props.match.params.id;
  const [userJobs, setUserJobs] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    async function getUserPostedjobs() {
      try {
        const dbResult = await Api.get("/view-job-listings/:id", userId);
        setUserJobs(dbResult.data);
      } catch (err) {
        console.log(err);
      }
    }
    getUserPostedjobs();
  }, [result]);

  const handleChoiceSelection = async (selectedJobId, appliedUserId) => {
    try {
      const selectedUserSuccess = await Api.post(
        `/job-taker-selected/${selectedJobId}`,
        {
          appliedUser: appliedUserId
        }
      );
      setResult(selectedUserSuccess.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClosedTasks = (status, jobId, appliedUserId, taskTaker) => {
    if (status === "active") {
      return (
        <button
          className="select-applicant"
          onClick={() => handleChoiceSelection(jobId, appliedUserId)}
        >
          Select User
        </button>
      );
    }
    if (status === "closed" && appliedUserId === taskTaker) {
      return (
        <Link
          to={`/send-message/${jobId}`}
          className="first-message-send"
          id="successfull-applicant"
        >
          Send Message
        </Link>
      );
    }
    return null;
  };

  return (
    <div className="view-jobs-container">
      {!result ? null : (
        <h2 className="application-choice-success">{result}</h2>
      )}
      <h2 className="view-jobs-header">Jobs Posted</h2>
      <p>
        Please choose a person you would like to complete the task you posted
        from the options below
      </p>
      {userJobs.length === 0 ? (
        <p>No Current Jobs Posted</p>
      ) : (
        userJobs.map((job, i) => (
          <div key={i} className="job-details-container">
            <h3>Job Details: {job.jobDetails}</h3>
            <p>Date: {job.date} </p>
            <p>{job.location.city} </p>
            <div className="pick-winner-container">
              {job.appliedUsers.map((appliedUser, i) => (
                <div key={i} className="user-selection-info">
                  <h4>{appliedUser.name} </h4>
                  <img
                    className="user-profile-pic"
                    src={appliedUser.profilePicture}
                    alt="Profile"
                  />
                  {handleClosedTasks(
                    job.status,
                    job._id,
                    appliedUser._id,
                    job.taskTaker
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
