import React, { useContext } from "react";
import { userContext } from "../Context/UserContext";

export default function UserProfile() {
  const user = useContext(userContext);

  console.log(user);

  return (
    <div>
      <h1>Welcome to Profile</h1>
    </div>
  );
}
