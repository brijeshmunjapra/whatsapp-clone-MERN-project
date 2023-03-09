import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

function SidebarChat() {
  return (
    <div className="sideBarchat">
      <Avatar />
      <div className="sideBarchat_info">
        <h2>Room Name</h2>
        <p>last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
