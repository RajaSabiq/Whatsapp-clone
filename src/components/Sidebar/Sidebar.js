import { SearchOutlined } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SidebarChat from './SidebarChat';
import './Sidebar.css';

function Sidebar({ setter }) {
  const [userList, setUserList] = useState([]);
  const [filterUserList, setFilterUserList] = useState([]);
  useEffect(() => {
    setUserList([
      { name: 'Raja Sabiq', lastMessage: 'React is awesome', uid: '12' },
      { name: 'Ali', lastMessage: 'React is ', uid: '13' },
      { name: 'Zia', lastMessage: 'React is awesome', uid: '14' },
    ]);
    setFilterUserList([
      { name: 'Raja Sabiq', lastMessage: 'React is awesome', uid: '12' },
      { name: 'Ali', lastMessage: 'React is COol', uid: '13' },
      { name: 'Zia', lastMessage: 'React is awesome', uid: '14' },
    ]);
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <AccountCircleIcon />
        <div className='sidebar__headerRight'>
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

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input
            placeholder='Search or start new chat'
            onChange={(e) => {
              let value = e.target.value;
              let tempArr = userList;
              setFilterUserList(
                tempArr.filter((item) =>
                  item.name.toLowerCase().includes(value.toLowerCase())
                )
              );
            }}
          />
        </div>
      </div>

      <div className='sidebar__chats'>
        {filterUserList.map((item, index) => (
          <SidebarChat
            uid={item.uid}
            key={index}
            setter={setter}
            name={item.name}
            lastMessage={item.lastMessage}
          />
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
