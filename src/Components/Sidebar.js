import React from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import AvtarImage from "../avtar.jpeg";
import SideBarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={AvtarImage} />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchbar">
          <SearchOutlined />
          <input placeholder="search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />

      </div>
    </div>
  );
}

export default Sidebar;
