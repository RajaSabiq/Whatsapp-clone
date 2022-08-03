import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import "./Chat.css";

function Chat({ activeChat }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed>>>", input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <AccountCircleIcon />
        <div className="chat__headerInfo">
          <h3>{activeChat}</h3>
          <p>Last Seen at ...</p>
        </div>
        <div className="chat__headerRight">
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

      <div className="chat__body">
        <p className="chat__message chat__receiver">
          <span className="chat__name">farrukh khan</span>
          loremWhat is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries,
          <span className="chat__timestamp">4:40PM</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <AttachFileIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
