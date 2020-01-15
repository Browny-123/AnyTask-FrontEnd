import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NarBar";
import "./Styles/Index.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Home from "./Components/Home";
import CreateTask from "./Components/CreateTask";
import JobSearch from "./Components/JobSearch";
import UserProfile from "./Components/UserProfile";
import Error404 from "./Components/Error404";
import Messages from "./Components/Messages";
import { UserContext } from "./auth/UserContext";
import SendMessage from "./Components/SendMesage";
import ViewPostedJobs from "./Components/ViewPostedJobs";
import { ProtectedRoute } from "./auth/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const UserContextValue = {
    currentUser,
    setCurrentUser
  };

  return (
    <div className="App">
      <UserContext.Provider value={UserContextValue}>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/createTask" component={CreateTask} />
            <Route path="/searchJobs" component={JobSearch} />
            <ProtectedRoute path="/profile" component={UserProfile} />
            <ProtectedRoute path="/messages" component={Messages} />
            <ProtectedRoute path="/send-message/:id" component={SendMessage} />
            <ProtectedRoute
              path="/view-job-details/:id"
              component={ViewPostedJobs}
            />
            <Route path="*" component={Error404} />
          </Switch>
        </React.Fragment>
      </UserContext.Provider>
    </div>
  );
}

export default App;
