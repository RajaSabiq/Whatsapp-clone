import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './SidebarChat.css';

function SidebarChat({ name, lastMessage, setter, uid }) {
  return (
    <div
      className='sidebarChat'
      onClick={() => {
        setter({
          name,
          uid,
        });
      }}
    >
      <AccountCircleIcon />
      <div className='sidebarChat__info'>
        <h2>{name}</h2>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
