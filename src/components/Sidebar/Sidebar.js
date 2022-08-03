import { SearchOutlined } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";

function Sidebar({ setActiveChat }) {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    setUserList([
      { name: "Raja Sabiq", lastMessage: "React is awesome" },
      { name: "Ali", lastMessage: "React is " },
      { name: "Zia", lastMessage: "React is awesome" },
    ]);
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <AccountCircleIcon />
        <div className="sidebar__headerRight">
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

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        {
          // {
          //   return
          // }
          // (
          //   if
          // )
          // Dynamic Side bar Chat
          userList.map((item) => (
            <SidebarChat
              setActiveChat={setActiveChat}
              name={item.name}
              lastMessage={item.lastMessage}
            />
          ))
        }
      </div>
    </div>
  );
}
export default Sidebar;
