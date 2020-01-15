import React, { useState } from "react";
import ApiHandler from "../Apihandler/ApiHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "../Styles/CreateJob.css";
const Api = new ApiHandler();

export default function Signup(props) {
  const [newUser, setNewUser] = useState({});
  const [image, setImage] = useState("");
  const [fileUpload, setFileUpload] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("username", newUser.username);
    formData.append("name", newUser.name);
    formData.append("contactNumber", newUser.contactNumber);
    formData.append("email", newUser.email);
    formData.append("password", newUser.password);
    formData.append("street", newUser.street);
    formData.append("city", newUser.city);
    formData.append("county", newUser.county);
    formData.append("postcode", newUser.postcode);
    formData.append("country", newUser.country);
    formData.append("profilePicture", image);
    try {
      await Api.post("signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      props.history.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleImage = e => {
    setImage(e.target.files[0]);
    setFileUpload("Image Chosen");
  };
  return (
    <div className="signUpContainer">
      <h1 className="sign-up-title">
        Please create an account access and post Jobs
      </h1>
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="sign-up-form"
      >
        <label htmlFor="username">Username</label>
        <input type="text" name="username" className="sign-up-input" required />

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
        <label className="choose-profile-picture" htmlFor="profilePicture">
          Choose Profile Picture <FontAwesomeIcon icon={faUpload} />
        </label>
        <input
          type="file"
          onChange={handleImage}
          name="profilePicture"
          id="profilePicture"
          required
          style={{ visibility: "hidden", display: "none" }}
        />
        <p className="upload-success"> {fileUpload} </p>
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}
