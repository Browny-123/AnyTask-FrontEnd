import React, { useState, useContext } from "react";
import { userContext } from "../Context/UserContext";
import ApiHandler from "../Apihandler/ApiHandler";
import "../Styles/Singin.css";

const api = new ApiHandler();

const Signin = props => {
  const { setUser } = useContext(userContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const apiRes = await api.post("signin", {
        email: loginEmail,
        password: loginPassword
      });
      console.log(apiRes);

      setUser(apiRes.data.currentUser);
      props.history.push("/");
    } catch (err) {
      console.log(err);
      setUser(null);
    }
  };
  return (
    <div className="signInContainer">
      <h1>Please Sign into your account</h1>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <label className="label" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          className="signInInput"
          onChange={e => setLoginEmail(e.target.value)}
        />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="signInInput"
          onChange={e => setLoginPassword(e.target.value)}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Signin;
