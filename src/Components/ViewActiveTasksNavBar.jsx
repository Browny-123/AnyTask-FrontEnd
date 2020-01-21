import React from "react";
import { Link } from "react-router-dom";

export default function ActiveTasks({ userJobs, user }) {
  return (
    <div className="user-job-list">
      {!user ? null : (
        <>
          {" "}
          <Link
            to={`/view-job-details/${user._id}`}
            className="to-job-nav-link"
          >
            View Your Job Listings
          </Link>
          <h3 className="history-title">Job History</h3>
          {userJobs.map((job, i) => (
            <div className="ind-job" key={i}>
              <ul>
                <li>
                  <span>Status: </span> {job.status}{" "}
                </li>
                <li>
                  <span>Street: </span> {job.location.street}{" "}
                </li>
                <li>
                  <span>City: </span>
                  {job.location.city}{" "}
                </li>
                <li>
                  <span>Country: </span> {job.location.coutry}{" "}
                </li>
                <li>
                  <span>Details: </span> {job.jobDetails}{" "}
                </li>
                <li>
                  <span>Reward</span>£{job.reward}{" "}
                </li>
                {job.taskTaker !== user._id ? null : (
                  <Link
                    to={`/send-message/${job._id}`}
                    className="to-job-nav-link"
                  >
                    Send Message
                  </Link>
                )}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
