import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NarBar";
import "./Styles/Index.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Home from "./Components/Home";
import { userContext } from "./Context/UserContext";
import CreateTask from "./Components/CreateTask";
import JobSearch from "./Components/JobSearch";
import UserProfile from "./Components/UserProfile";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <userContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/createTask" component={CreateTask} />
          <Route path="/searchJobs" component={JobSearch} />
          <Route path="/profile" component={UserProfile} />
        </Switch>
      </userContext.Provider>
    </div>
  );
}

export default App;
