import React from "react";

import "../Styles/HomePage.css";
export default function Home() {
  return (
    <div className="home-container">
      <div className="main-section">
        <h1 className="main-title">AnyTask</h1>
        <h2>How To Get Started</h2>
        <ul>
          <li>Sign Up</li>
          <li>Log In</li>
          <li>Create or Search for availble Tasks</li>
          <li>If you like a task, you will be added to the candidates</li>
          <li>
            If you are chosen, you can message the poster and arrange for the
            task to be completed
          </li>
        </ul>
      </div>
    </div>
  );
}
