import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import ApiHandler from "../Apihandler/ApiHandler";

const api = new ApiHandler();
export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userContext = useContext(UserContext);
  const { currentUser, setCurrentUser } = userContext;

  useEffect(() => {
    function getStatus() {
      //method body starts
      api
        .get("/is-loggedin")
        .then(res => {
          setCurrentUser(res.data.currentUser);
          setIsLoggedIn(true);
        })
        .catch(err => {
          setCurrentUser(null);
          setIsLoggedIn(false);
        });
    } //method body closed.
    getStatus(); //this is the call
  }, [setCurrentUser]);
  return { isLoggedIn, currentUser };
};
