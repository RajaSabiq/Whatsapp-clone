import React, { useEffect, useState } from 'react';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';
import ChatHeader from './components/ChatHeader';
import './Chat.css';
function Chat({ activeChat }) {
  const [chat, setChat] = useState([]);
  useEffect(() => {
    setChat([
      {
        roomID: '1213',
        data: [
          {
            message: 'hey',
            timestamp: '12.00',
            uid: '12',
          },
          {
            message: 'hey',
            timestamp: '2.00',
            uid: '13',
          },
          {
            message: 'hey',
            timestamp: '3.00',
            uid: '13',
          },
          {
            message: 'hey',
            timestamp: '12.00',
            uid: '12',
          },
          {
            message: 'hey',
            timestamp: '12.00',
            uid: '14',
          },
        ],
      },
      {
        roomID: '1214',
        data: [
          {
            message: 'hey',
            timestamp: '12.00',
            uid: '12',
          },
          {
            message: 'hey',
            timestamp: '12.00',
            uid: '12',
          },
        ],
      },
    ]);
  }, []);
  return (
    <div className='chat'>
      <ChatHeader activeChat={activeChat} />
      <ChatBody
        uid={activeChat.uid}
        chat={
          chat.find((value) => value.roomID === `12${activeChat.uid}`) !==
          undefined
            ? chat.find((value) => value.roomID === `12${activeChat.uid}`).data
            : []
        }
      />
      <ChatFooter setChat={setChat} />
    </div>
  );
}

export default Chat;
