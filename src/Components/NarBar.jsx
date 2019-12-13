import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";
import { userContext } from "../Context/UserContext";
const NavBar = () => {
  const user = useContext(userContext);

  return (
    <nav className="nav-main">
      <div className="nav-top">
        <h1 className="main-logo">AnyTask</h1>
        <div className="top-links">
          {user.user ? (
            <div>
              <NavLink to="/messages">Messages</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <span>Log Out</span>
            </div>
          ) : (
            <div>
              <NavLink to="/signup">Sign Up</NavLink>
              <NavLink to="/signin">Log In</NavLink>
            </div>
          )}
        </div>
      </div>
      <div className="nav-bottom">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/createTask">
          Create Task
        </NavLink>
        <NavLink exact to="/searchJobs">
          Search Task
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
