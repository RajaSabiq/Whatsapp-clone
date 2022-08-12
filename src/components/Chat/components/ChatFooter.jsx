import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React from 'react';

const ChatFooter = ({ setChat }) => {
  return (
    <div className='chat__footer'>
      <InsertEmoticonIcon />
      <AttachFileIcon />
      <form>
        <input placeholder='Type a message' type='text' />
        <button onClick={() => {}} type='submit'>
          Send a message
        </button>
      </form>
      <MicIcon />
    </div>
  );
};

export default ChatFooter;
