import React from "react";

export default function JobOwner({ jobOwner }) {
  return (
    <div className="job-divider">
      <h1>Poster Name</h1>
      <h2>{jobOwner.name}</h2>
      <p>Rating: 5 Stars</p>
    </div>
  );
}
