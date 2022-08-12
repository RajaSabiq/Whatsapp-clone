import React from 'react';

const ChatSender = ({ message, timestamp }) => {
  return (
    <p className='chat__message chat__sender'>
      {message}
      <span className='chat__timestamp'>{timestamp}</span>
    </p>
  );
};

export default ChatSender;
