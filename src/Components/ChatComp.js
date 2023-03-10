import React from "react";
import "./ChatComp.css";
import { Avatar } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {  IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

function ChatComp() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen a</p>
        </div>
        <div className="chat_headerRight">
        <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ChatComp;
