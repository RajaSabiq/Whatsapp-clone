//import logo from "./logo.svg";
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { useState } from 'react';
function App() {
  const [activeChat, setActiveChat] = useState(null);
  console.log(activeChat);
  return (
    <div className='app'>
      <div className='app_body'>
        <Sidebar setter={setActiveChat} />
        {!activeChat ? (
          <h5>Welcome to Whatsapp</h5>
        ) : (
          <Chat activeChat={activeChat} />
        )}
      </div>
    </div>
  );
}

export default App;
