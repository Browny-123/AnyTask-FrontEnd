import React, { useContext, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../auth/UserContext";
import ApiHandler from "../Apihandler/ApiHandler";
import ViewActiveTasksNavBar from "./ViewActiveTasksNavBar";
import "../Styles/NavBar.css";

const api = new ApiHandler();
const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [userJobs, setUserJobs] = useState({});
  const history = useHistory();

  const handleLogout = () => {
    api.post("logout").then(res => {
      setCurrentUser(null);
      history.push("/");
    });
  };

  const handleTaskClick = e => {
    if (!hiddenMenu) {
      api
        .get("/activeTasks")
        .then(dbRes => {
          setUserJobs(dbRes.data);
          setHiddenMenu(true);
        })
        .catch(err => console.log(err));
    } else {
      setHiddenMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setHiddenMenu(false));
  }, [hiddenMenu, history.location.pathname]);

  useEffect(() => {
    setHiddenMenu(false);
  }, [history.location.pathname]);

  return (
    <nav className="nav-main">
      <div className="nav-top">
        <h1 className="main-logo" onClick={() => history.push("/")}>
          AnyTask
        </h1>
        <div className="top-links">
          {currentUser ? (
            <div>
              <NavLink
                to={`/messages/user/${currentUser._id}`}
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
              <button onClick={handleLogout} className="nav-link" id="log-out">
                Log Out
              </button>
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
        {currentUser && (
          <button
            className="view-active-tasks nav-link"
            onClick={handleTaskClick}
          >
            View Current Tasks
          </button>
        )}
      </div>
      {!hiddenMenu ? null : (
        <div className="user-job-list-container">
          <ViewActiveTasksNavBar userJobs={userJobs} user={currentUser} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
