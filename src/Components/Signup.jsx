import React, { Component } from "react";
import ApiHandler from "../Apihandler/ApiHandler";
import "../Styles/Signup.css";
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
      //   this.props.history.push("/signin");
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
        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          className="form"
        >
          <div className="signUpInfo">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="input" />

            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" className="input" />

            <label htmlFor="contactNumber">Contact Number</label>
            <input type="text" name="contactNumber" className="input" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="input" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="input" />
          </div>
          <div className="signUpAddress">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              name="street"
              className="input"
              placeholder="Enter a Street and Number"
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              className="input"
              placeholder="Enter a City"
            />
            <label htmlFor="county">County</label>
            <input
              type="text"
              name="county"
              className="input"
              placeholder="Enter a County"
            />
            <label htmlFor="postcode">Postcode</label>
            <input
              type="text"
              name="postcode"
              className="input"
              placeholder="Enter a Postcode"
            />
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              className="input"
              placeholder="Enter a Country"
            />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}
