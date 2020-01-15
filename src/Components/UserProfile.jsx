import React, { useContext, useState } from "react";
import { UserContext } from "../auth/UserContext";
import ApiHandler from "../Apihandler/ApiHandler";

const api = new ApiHandler();

export default function UserProfile() {
  const { currentUser } = useContext(UserContext);
  const [profileInfo, setProfileInfo] = useState({
    contactNumber: currentUser.contactNumber,
    email: currentUser.email,
    password: null,
    street: currentUser.address.street,
    city: currentUser.address.city,
    county: currentUser.address.county,
    postcode: currentUser.address.postcode,
    country: currentUser.address.country
  });
  const [updateResult, setUpdateResult] = useState(null);

  const handleChange = e => {
    const value = e.target.value;
    setProfileInfo({ ...profileInfo, [e.target.name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const updateResult = await api.post("/updateProfile", profileInfo);
      setUpdateResult(updateResult.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {!currentUser ? null : (
        <div className="signUpContainer">
          <h1 className="sign-up-title">Edit Profile</h1>
          <p className="upload-success"> {updateResult} </p>
          <form
            onSubmit={handleSubmit}
            onChange={handleChange}
            className="sign-up-form"
          >
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              className="sign-up-input"
              defaultValue={currentUser.contactNumber}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="sign-up-input"
              defaultValue={currentUser.email}
            />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="sign-up-input" />
            <label htmlFor="street">Street</label>
            <input
              type="text"
              name="street"
              className="sign-up-input"
              placeholder="Enter a Street and Number"
              defaultValue={currentUser.address.street}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              className="sign-up-input"
              placeholder="Enter a City"
              defaultValue={currentUser.address.city}
            />
            <label htmlFor="county">County</label>
            <input
              type="text"
              name="county"
              className="sign-up-input"
              placeholder="Enter a County"
              defaultValue={currentUser.address.county}
            />
            <label htmlFor="postcode">Postcode</label>
            <input
              type="text"
              name="postcode"
              className="sign-up-input"
              placeholder="Enter a Postcode"
              defaultValue={currentUser.address.postcode}
            />
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              className="sign-up-input"
              placeholder="Enter a Country"
              defaultValue={currentUser.address.country}
            />
            <button className="btn">Update Profile</button>
          </form>
        </div>
      )}
    </div>
  );
}
