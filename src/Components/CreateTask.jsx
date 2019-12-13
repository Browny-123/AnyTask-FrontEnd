import React, { Component } from "react";
import ApiHandler from "../Apihandler/ApiHandler";
import "../Styles/CreateJob.css";
const Api = new ApiHandler();
export default class CreateTask extends Component {
  state = {
    street: null,
    city: null,
    country: null,
    cost: null,
    timeNeeded: null,
    jobDetails: null,
    date: null,
    speciality: null
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await Api.post("/createtask", this.state);
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value.toUpperCase() });
  };
  render() {
    return (
      <div className="create-task-container">
        <h1 className="create-task-title">Create a Task</h1>

        <form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          className="task-form"
        >
          <label htmlFor="Street">Street</label>
          <input type="text" name="street" className="create-task-input" />
          <label htmlFor="city">City</label>
          <input type="text" name="city" className="create-task-input" />
          <label htmlFor="country">Country</label>
          <input type="text" name="country" className="create-task-input" />
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            min="0"
            name="cost"
            className="create-task-input"
          />
          <label htmlFor="timeNeeded">Time Needed for Task</label>
          <input
            type="number"
            name="timeNeeded"
            min="0"
            className="create-task-input"
          />
          <label htmlFor="jobDetails">
            Please specify what is required for the job
          </label>
          <input type="text" name="jobDetails" className="create-task-input" />
          <label htmlFor="date">Date of task</label>
          <input type="date" name="date" className="create-task-input" />
          <label htmlFor="speciality">Please enter the required skills</label>
          <input type="text" name="speciality" className="create-task-input" />
          <button className="btn" id="btn">
            Create Task
          </button>
        </form>
      </div>
    );
  }
}

// If no user, display please sign in.
