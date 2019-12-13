import React from "react";
import signup from "../images/signup.jpg";
import money from "../images/money.jpg";
import getSelected from "../images/getSelected.jpg";
import communication from "../images/communication.jpg";
import look from "../images/look.jpg";
import completed from "../images/completed.jpg";
export default function HomePageLayout() {
  return (
    <div className="second-main-section">
      <div className="main-divider">
        <img src={signup} alt="sign up" />
        <p>Sign Up</p>
      </div>
      <div className="main-divider">
        <img src={completed} alt="completed job" />
        <p>Look For Jobs</p>
      </div>
      <div className="main-divider">
        <img src={getSelected} alt="selected" />
        <p>Get Accepted</p>
      </div>
      <div className="main-divider">
        <img src={communication} alt="communication" />
        <p>Comunicate with Job Poster</p>
      </div>
      <div className="main-divider">
        <img src={look} alt="look for job" />
        <p>Complete Job</p>
      </div>
      <div className="main-divider">
        <img src={money} alt="" />
        <p>Get Paid</p>
      </div>
    </div>
  );
}
