import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ApiHandler from "../Apihandler/ApiHandler";
import { UserContext } from "../auth/UserContext";
import "../Styles/Messages.css";

const api = new ApiHandler();

export default function Messages() {
  const { currentUser } = useContext(UserContext);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    async function getJobMessages() {
      try {
        const resultData = await api.get(`/messages/user/${currentUser._id}`);
        if (resultData.data.length !== 0) {
          setMessages(resultData.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getJobMessages();
  }, [setMessages]);

  const formatData = value => {
    if (!value) return "Not Stated";
    else {
      const upperCase = value[0];
      const restofString = value.substring(1).toLowerCase();
      return upperCase + restofString;
    }
  };

  const formatMessages = message => {
    return message.map((individualMessage, i) => (
      <div key={i} className="individual-messages">
        <span>{individualMessage.senderName} - </span>
        <span>Sent: {individualMessage.date}</span>
        <p>Message: {individualMessage.message}</p>
      </div>
    ));
  };

  return (
    <div className="messages-container">
      <h1 className="messages-heading">Messages</h1>
      {!messages ? (
        <h2 className="messages-second-heading">You have no Messages</h2>
      ) : (
        messages.map((info, i) => (
          <div key={i} className="each-job-container">
            <div className="each-job-title">
              {info.ownerId._id === currentUser._id ? (
                <h3>You posted this Job</h3>
              ) : (
                <h3>You applied for this Job</h3>
              )}
              <span>{formatData(info.jobDetails)}</span>{" "}
              <span>{formatData(info.location.city)}</span>{" "}
              <span>Reward: £{info.reward}</span>
            </div>
            <div>{formatMessages(info.messages)}</div>
            <Link
              to={`/send-message/${info._id}`}
              className="messages-send-link"
            >
              {info.messages.length === 0 ? "Send Message" : "Reply"}{" "}
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
