import React, { useState, useEffect } from "react";
import ApiHandle from "../Apihandler/ApiHandler";
import { Link } from "react-router-dom";
import "../Styles/SendMessage.css";

const api = new ApiHandle();

export default function SendMesage(props) {
  const [message, setMessage] = useState("");
  const [JobOwnerName, setJobOwnerName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sendStatus, setSendStatus] = useState("");
  const jobId = props.match.params.id;

  useEffect(() => {
    async function getJobOwnerName() {
      try {
        const resultdata = await api.get(`/send-message/${jobId}`);
        setJobOwnerName(resultdata.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getJobOwnerName();
  }, [jobId]);

  const handleMessageContent = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = async e => {
    try {
      const success = await api.post(`/send-message/${jobId}`, {
        message: message
      });
      setSendStatus(success.data);
    } catch (err) {
      console.log(err);
    }
    setMessage("");
  };
  const handleCloseStatusMessage = () => {
    setSendStatus("");
  };

  return (
    <div className="send-message-container">
      {isLoading ? (
        <h1>...Loading</h1>
      ) : (
        <div className="send-message-form">
          <h1 className="send-message-title">
            Send a Message to {JobOwnerName}
          </h1>
          <textarea
            onChange={handleMessageContent}
            value={message}
            name="message"
            id="message-content"
            cols="30"
            rows="10"
            placeholder="Enter Message. Max 255 Characters"
          ></textarea>
          <button onClick={handleSubmit}>Send Message</button>
        </div>
      )}
      {sendStatus ? (
        <div className="success-message-container">
          <h1 className="send-message-title">{sendStatus}</h1>
          <Link to="/messages" className="goto-messages_link">
            Go To Messages
          </Link>
          <button onClick={handleCloseStatusMessage} className="close-button">
            X
          </button>
        </div>
      ) : null}
    </div>
  );
}
