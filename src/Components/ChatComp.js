import React from "react";
import "./ChatComp.css";
import { Avatar } from "@mui/material";

function ChatComp() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen a</p>
        </div>
        <div className="chat_headerRight"></div>
      </div>
    </div>
  );
}

export default ChatComp;
