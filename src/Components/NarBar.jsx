import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";
import { userContext } from "../Context/UserContext";
import ApiHandler from "../Apihandler/ApiHandler";

const api = new ApiHandler();
const NavBar = props => {
  const { user, setUser } = useContext(userContext);

  const handleLogout = () => {
    api.post("logout").then(res => {
      setUser(null);
    });
  };

  return (
    <nav className="nav-main">
      <div className="nav-top">
        <h1 className="main-logo">AnyTask</h1>
        <div className="top-links">
          {user ? (
            <div>
              <NavLink
                to="/messages"
                className="nav-link"
                activeClassName="active"
              >
                Messages
              </NavLink>
              <NavLink
                to="/profile"
                className="nav-link"
                activeClassName="active"
              >
                Profile
              </NavLink>
              <div onClick={handleLogout} className="nav-link">
                Log Out
              </div>
            </div>
          ) : (
            <div>
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
              <NavLink to="/signin" className="nav-link">
                Log In
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <div className="nav-bottom">
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink
          exact
          to="/createTask"
          className="nav-link"
          activeClassName="active"
        >
          Create Task
        </NavLink>
        <NavLink
          exact
          to="/searchJobs"
          className="nav-link"
          activeClassName="active"
        >
          Search Task
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
