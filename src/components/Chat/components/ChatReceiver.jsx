import React from 'react';

const ChatReceiver = ({ message, timestamp }) => {
  return (
    <p className='chat__message chat__receiver'>
      {message}
      <span className='chat__timestamp'>{timestamp}</span>
    </p>
  );
};

export default ChatReceiver;
