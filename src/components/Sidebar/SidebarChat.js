import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./SidebarChat.css";

function SidebarChat({ name, lastMessage, setActiveChat }) {
  return (
    <div
      className="sidebarChat"
      onClick={() => {
        setActiveChat(name);
      }}
    >
      <AccountCircleIcon />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
