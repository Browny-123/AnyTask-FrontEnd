import React, { useState, useContext } from "react";
import ApiHandler from "../Apihandler/ApiHandler";
import "../Styles/CreateJob.css";
import { UserContext } from "../auth/UserContext";

const Api = new ApiHandler();

export default function CreateTask(props) {
  const { currentUser } = useContext(UserContext);
  const [jobInfo, setJobInfo] = useState({});
  const [postedStatus, setPostedStatus] = useState(null);

  const handleSuccess = () => {
    setTimeout(() => {
      props.history.push("/");
    }, 2000);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const apiResult = await Api.post("/createtask", jobInfo);
      setPostedStatus(apiResult.data);
      handleSuccess();
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = e => {
    setJobInfo({ ...jobInfo, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="create-task-container"
      style={
        !currentUser ? { height: "calc(100vh - 115px)" } : { height: "auto" }
      }
    >
      {!currentUser ? (
        <h2 className="signin-to-access">
          Please Sign up or Sign in to post tasks
        </h2>
      ) : (
        <>
          {" "}
          <h1 className="create-task-title">Create a Task</h1>
          <p className="success-message">{postedStatus}</p>
          <form
            onChange={handleChange}
            onSubmit={handleSubmit}
            className="task-form"
          >
            <label htmlFor="Street">Street</label>
            <input type="text" name="street" className="create-task-input" />
            <label htmlFor="city">City</label>
            <input type="text" name="city" className="create-task-input" />
            <label htmlFor="country">Country</label>
            <input type="text" name="country" className="create-task-input" />
            <label htmlFor="reward">How much you are willing to pay (£)</label>
            <input
              type="number"
              min="0"
              name="reward"
              className="create-task-input"
            />
            <label htmlFor="timeNeeded">Time Needed for Task in minutes</label>
            <input
              type="number"
              name="timeNeeded"
              min="0"
              className="create-task-input"
            />
            <label htmlFor="date">Date of task</label>
            <input type="date" name="date" className="create-task-input" />
            <label htmlFor="speciality">Please enter the required skills</label>
            <input
              type="text"
              name="speciality"
              className="create-task-input"
              placeholder="e.g. Gardener, Plumber"
            />
            <label htmlFor="jobDetails">
              Please include a description of the task Required.
            </label>
            <textarea
              type="text"
              name="jobDetails"
              className="create-task-input-textarea"
              placeholder="Please enter the full details of what is required"
            />
            <button className="btn" id="btn">
              Create Task
            </button>
          </form>
        </>
      )}
    </div>
  );
}

// If no user, display please sign in.
