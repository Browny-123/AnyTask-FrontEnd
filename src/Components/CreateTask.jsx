import React, { Component } from "react";
import ApiHandler from "../Apihandler/ApiHandler";
import { userContext } from "../Context/UserContext";
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
    console.log(this.props);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Create a Task</h1>

        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor="Street">Street</label>
          <input type="text" name="street" className="input" />
          <label htmlFor="city">City</label>
          <input type="text" name="city" className="input" />
          <label htmlFor="country">Country</label>
          <input type="text" name="country" className="input" />
          <label htmlFor="cost">Cost</label>
          <input type="number" min="0" name="cost" className="input" />
          <label htmlFor="timeNeeded">Time Needed for Task</label>
          <input type="number" name="timeNeeded" min="0" className="input" />
          <label htmlFor="jobDetails">
            Please specify what is required for the job
          </label>
          <input type="text" name="jobDetails" className="input" />
          <label htmlFor="date">Date of task</label>
          <input type="date" name="date" className="input" />
          <label htmlFor="speciality">Please enter the required skills</label>
          <input type="text" name="speciality" className="input" />
          <input type="reset" name="resetForm" className="input" />
          <button>Create Task</button>
        </form>
      </div>
    );
  }
}

// If no user, display please sign in.
