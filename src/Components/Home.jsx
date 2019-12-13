import React, { Component } from "react";
import HomePageLayout from "./HomePageLayout";

import "../Styles/HomePage.css";
export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="main-section">
          <h1 className="main-title">
            AnyTask - the place to quickly find one time jobs
          </h1>
        </div>
        <HomePageLayout />
      </div>
    );
  }
}
