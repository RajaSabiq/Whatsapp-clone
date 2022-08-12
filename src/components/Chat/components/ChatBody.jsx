import React from 'react';
import ChatReceiver from './ChatReceiver';
import ChatSender from './ChatSender';

const ChatBody = ({ uid, chat }) => {
  return (
    <div className='chat__body'>
      {chat.map((item, index) =>
        item.uid === uid ? (
          <ChatReceiver message={item.message} timestamp={item.timestamp} />
        ) : (
          <ChatSender message={item.message} timestamp={item.timestamp} />
        )
      )}
    </div>
  );
};

export default ChatBody;
