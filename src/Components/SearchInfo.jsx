import React, { useState, useContext } from "react";
import ApiHandler from "../Apihandler/ApiHandler";
import "../Styles/JobSearch.css";
import { UserContext } from "../auth/UserContext";
const api = new ApiHandler();

export default function SearchInfo({ clbk }) {
  const { currentUser } = useContext(UserContext);
  const [city, setCity] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const jobResults = await api.get(`searchJobs?city=${city}`);
      clbk(jobResults.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = e => {
    const eUpperCase = e.target.value.toUpperCase();
    setCity(eUpperCase);
  };
  return (
    <div className="search-container">
      {!currentUser ? (
        <div>
          <h1 className="sign-in-toUse">
            Please Sign up or log in to search Jobs
          </h1>
        </div>
      ) : (
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          className="city-search"
        >
          <label htmlFor="citySearch">
            Please enter the City you wish to search
          </label>
          <input type="text" name="citySearch" className="search-input" />
          <button className="search-btn">Submit</button>
        </form>
      )}
    </div>
  );
}
