import React, { useState } from "react";
import "./ChatComp.css";
import { Avatar } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import { IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

function ChatComp({messages}) {
  const [inputData, setInputData] = useState("");
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
      {messages?.map((obj, idx)=>  <p className={`chat_message ${obj.received && "chat_reciever"}`} key={idx}>
          <span className="chat_name">{obj.name}</span>
          {obj.message}
          <span className="chat_timestamp">{obj.timestamp}</span>
        </p>)}  
      </div>
      <div className="chat_footer">
        <InsertEmoticonOutlinedIcon />
        <form>
          <input
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Type a message"
            type="text"
          ></input>
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default ChatComp;
