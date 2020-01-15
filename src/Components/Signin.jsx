import React, { useState, useContext } from "react";
import { UserContext } from "../auth/UserContext";
import ApiHandler from "../Apihandler/ApiHandler";
import { Link } from "react-router-dom";
import "../Styles/Singin.css";
const api = new ApiHandler();

const Signin = props => {
  const { setCurrentUser } = useContext(UserContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const apiRes = await api.post("signin", {
        email: loginEmail,
        password: loginPassword
      });
      setCurrentUser(apiRes.data.currentUser);
      props.history.push("/");
    } catch (err) {
      console.log(err);
      setCurrentUser(null);
    }
  };
  return (
    <div className="signInContainer">
      <h1 className="signIn-heading">Please Sign into your account</h1>
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
        <p className="sign-up-redirect">
          No Account Yet?{" "}
          <Link to="/signup" className="sign-up-redirect-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
