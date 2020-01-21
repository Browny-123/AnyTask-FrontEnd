import React from "react";

export default function JobOwner({ jobOwner }) {
  return (
    <div className="job-divider">
      {!jobOwner ? null : (
        <>
          {" "}
          <h2 className="job-poster">Job Poster</h2>
          <img
            src={jobOwner.profilePicture}
            alt="Profile"
            className="job-search-user-pic"
          />
          <p>{jobOwner.name}</p>
          <p>Rating: 5 Stars</p>
        </>
      )}
    </div>
  );
}
