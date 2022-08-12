import React from 'react';
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatHeader = ({ activeChat }) => {
  return (
    <div className='chat__header'>
      <AccountCircleIcon />
      <div className='chat__headerInfo'>
        <h3>{activeChat.name}</h3>
        <p>Last Seen at ...</p>
      </div>
      <div className='chat__headerRight'>
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatHeader;
