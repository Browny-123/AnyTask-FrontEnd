import React, { Component } from "react";
import ApiHandler from "../Apihandler/ApiHandler";
import "../Styles/CreateJob.css";
const Api = new ApiHandler();

export default class Signup extends Component {
  state = {
    username: null,
    name: null,
    contactNumber: null,
    email: null,
    password: null,
    street: null,
    city: null,
    county: null,
    postcode: null,
    country: null
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await Api.post("signup", this.state);
      this.props.history.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="signUpContainer">
        <h1 className="sign-up-title">Please create an account access Jobs</h1>
        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          className="sign-up-form"
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="sign-up-input"
            required
          />

          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" className="sign-up-input" required />

          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            className="sign-up-input"
            required
          />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="sign-up-input" required />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="sign-up-input"
            required
          />
          <label htmlFor="street">Street</label>
          <input
            type="text"
            name="street"
            className="sign-up-input"
            placeholder="Enter a Street and Number"
            required
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            className="sign-up-input"
            placeholder="Enter a City"
            required
          />
          <label htmlFor="county">County</label>
          <input
            type="text"
            name="county"
            className="sign-up-input"
            placeholder="Enter a County"
            required
          />
          <label htmlFor="postcode">Postcode</label>
          <input
            type="text"
            name="postcode"
            className="sign-up-input"
            placeholder="Enter a Postcode"
            required
          />
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            className="sign-up-input"
            placeholder="Enter a Country"
            required
          />
          <button className="btn">Sign Up</button>
        </form>
      </div>
    );
  }
}
